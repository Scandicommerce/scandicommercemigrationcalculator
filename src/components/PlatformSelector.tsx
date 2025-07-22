import React, { useState, useEffect } from 'react';
import { sourcePlatforms, targetPlatforms } from '../data/platforms';
import './PlatformSelector.css';

interface PlatformSelectorProps { }

interface PricingData {
  price: number;
  time: number;
}

const PlatformSelector: React.FC<PlatformSelectorProps> = () => {
  const [sourcePlatform, setSourcePlatform] = useState<string>('amazon');
  const [targetPlatform, setTargetPlatform] = useState<string>('shopify');
  const [numberOfProducts, setNumberOfProducts] = useState<string>('100');
  const [numberOfCustomers, setNumberOfCustomers] = useState<string>('100');
  const [numberOfOrders, setNumberOfOrders] = useState<string>('100');
  const [pricingData, setPricingData] = useState<PricingData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const handleSourceChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSourcePlatform(event.target.value);
  };

  const handleTargetChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setTargetPlatform(event.target.value);
  };

  const handleProductsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNumberOfProducts(event.target.value);
  };

  const handleCustomersChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNumberOfCustomers(event.target.value);
  };

  const handleOrdersChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNumberOfOrders(event.target.value);
  };


  // Fetch pricing data from API
  const fetchPricing = async () => {
    if (!sourcePlatform || !targetPlatform || !numberOfProducts || !numberOfCustomers || !numberOfOrders ) {
      return;
    }

    setLoading(true);
    setError('');

    try {
      const apiUrl = `https://api.litextension.com/api/price-all-in-one?source=${sourcePlatform}&target=${targetPlatform}&products=${numberOfProducts}&customers=${numberOfCustomers}&orders=${numberOfOrders}`;
      console.log("apiUrl========>", apiUrl)
      const response = await fetch(apiUrl);
      
      if (!response.ok) {
        throw new Error('Failed to fetch pricing data');
      }

// Small projects (200-5,000 entities): 50-60% markup
// Medium projects (5,000-100,000 entities): 40% markup
// Large projects (100,000+ entities): 30-35% markup

      const data: PricingData = await response.json();
      const totalProduct = parseInt(numberOfProducts) + parseInt(numberOfCustomers) + parseInt(numberOfOrders);

      if(totalProduct < 5000){
        data.price += data.price * 0.5;
      }else if(totalProduct > 5000 && totalProduct < 100000){
        data.price += data.price * 0.4;
      }else{
        data.price += data.price * 0.3;
      }
      setPricingData(data);
    } catch (err) {
      setError('Unable to fetch pricing. Please try again.');
      console.error('API Error:', err);
    } finally {
      setLoading(false);
    }
  };

  // Fetch pricing when form values change
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      fetchPricing();
    }, 500); // Debounce API calls

    return () => clearTimeout(timeoutId);
  }, [sourcePlatform, targetPlatform, numberOfProducts, numberOfCustomers, numberOfOrders]);

  return (
    <div className="migration-calculator-container">
      <div>
        <div className="migration-calculator-card">
          {/* Header Badge */}
          <div className="calculator-badge">
            MIGRATION CALCULATOR
          </div>

          {/* Main Title */}
          <h1 className="main-title">GET YOUR MIGRATION QUOTE</h1>
          <p className="main-subtitle">Calculate your exact migration cost instantly</p>

          <div className="form-container">
            {/* Source Platform */}
            <div className="form-group">
              <label htmlFor="source-platform" className="form-label">
                I'd Like to Migrate From
              </label>
              <div className="select-container">
                <select
                  id="source-platform"
                  value={sourcePlatform}
                  onChange={handleSourceChange}
                  className="form-select"
                >
                  {sourcePlatforms.map((platform) => (
                    <option key={platform.key} value={platform.key}>
                      {platform.name}
                    </option>
                  ))}
                </select>
                <div className="select-arrow">
                  <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                    <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Target Platform */}
            <div className="form-group">
              <label htmlFor="target-platform" className="form-label">
                To
              </label>
              <div className="select-container">
                <select
                  id="target-platform"
                  value={targetPlatform}
                  onChange={handleTargetChange}
                  className="form-select"
                >
                  {targetPlatforms.map((platform) => (
                    <option key={platform.key} value={platform.key}>
                      {platform.name}
                    </option>
                  ))}
                </select>
                <div className="select-arrow">
                  <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                    <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Number of Products */}
            <div className="form-group">
              <label htmlFor="products" className="form-label">
                Number of Products
              </label>
              <input
                type="number"
                id="products"
                value={numberOfProducts}
                onChange={handleProductsChange}
                className="form-input"
                placeholder="100"
              />
            </div>

            {/* Number of Customers */}
            <div className="form-group">
              <label htmlFor="customers" className="form-label">
                Number of Customers
              </label>
              <input
                type="number"
                id="customers"
                value={numberOfCustomers}
                onChange={handleCustomersChange}
                className="form-input"
                placeholder="100"
              />
            </div>

            {/* Number of Orders */}
            <div className="form-group">
              <label htmlFor="orders" className="form-label">
                Number of Orders
              </label>
              <input
                type="number"
                id="orders"
                value={numberOfOrders}
                onChange={handleOrdersChange}
                className="form-input"
                placeholder="100"
              />
            </div>
            {/* Help Text */}
            <div className="help-text">
              <span className="help-icon">?</span>
              <span className="help-content">How to check the number of entities on your store?</span>
            </div>
          </div>

          {/* Migration Pricing Section */}
          <div className="pricing-section">
            <h2 className="pricing-title">Migration Pricing</h2>
            
            {loading && (
              <div className="pricing-loading">
                <div className="spinner"></div>
                <p>Calculating your migration cost...</p>
              </div>
            )}

            {error && (
              <div className="pricing-error">
                <p>{error}</p>
              </div>
            )}

            {pricingData && !loading && !error && (
              <div className="pricing-result">
                <div className="pricing-card">
                  <div className="price-display">
                    <span className="price-label">Total Cost:</span>
                    <span className="price-value">${pricingData.price}</span>
                  </div>
                  <div className="time-display">
                    <span className="time-label">Estimated Time:</span>
                    <span className="time-value">{pricingData.time} days</span>
                  </div>
                </div>
              </div>
            )}

            {!pricingData && !loading && !error && (
              <p className="pricing-subtitle">Enter your details to see pricing</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlatformSelector; 