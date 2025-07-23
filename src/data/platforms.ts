// E-commerce platform data extracted from input value.txt
export interface Platform {
  key: string;
  name: string;
}

// please update the platforms on the calculator app to them:
// salesforce commerce cloud, bigcommerce, Magento, woocommerce, mystore, wix
// the other platforms should be remove.


// Source platforms (from the main list in the text file)
export const sourcePlatforms: Platform[] = [
  { key: 'salesforce', name: 'Salesforce' },
  { key: 'bigcommerce', name: 'BigCommerce' },
  { key: 'magento', name: 'Magento' },
  { key: 'woocommerce', name: 'WooCommerce' },
  { key: 'mystore', name: 'Mystore.no' },
  { key: 'wix', name: 'Wix' },
];

// Target platforms (from the "Target Cart Type" section in the text file)
export const targetPlatforms: Platform[] = [
  { key: 'shopify', name: 'Shopify' }
]; 

