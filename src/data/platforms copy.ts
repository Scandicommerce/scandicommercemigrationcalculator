









// E-commerce platform data extracted from input value.txt
export interface Platform {
  key: string;
  name: string;
}

// Source platforms (from the main list in the text file)
export const sourcePlatforms: Platform[] = [
  { key: 'aabaco', name: 'Aabaco' },
  { key: 'ebay', name: 'Ebay' },
  { key: 'amazon', name: 'Amazon' },
  { key: 'abantecart', name: 'Abantecart' },
  { key: 'able', name: 'AbleCommerce' },
  { key: 'aceshop', name: 'Aceshop' },
  { key: 'actinic', name: 'Actinic' },
  { key: 'amazonstore', name: 'Amazon Store' },
  { key: 'americommerce', name: 'AmeriCommerce' },
  { key: 'arastta', name: 'Arastta' },
  { key: 'aspdotnet', name: 'AspDotNetStorefront' },
  { key: 'adobe', name: 'Adobe Business Catalyst' },
  { key: 'bigcartel', name: 'Big Cartel' },
  { key: 'bigcommerce', name: 'BigCommerce' },
  { key: 'cart66', name: 'Cart66' },
  { key: 'channeladvisor', name: 'ChannelAdvisor' },
  { key: 'corecommerce', name: 'CoreCommerce' },
  { key: 'cre', name: 'CRE Loaded' },
  { key: 'cscart', name: 'CS-Cart' },
  { key: 'cubecart', name: 'CubeCart' },
  { key: 'drupal', name: 'Drupal Commerce' },
  { key: 'easy', name: 'Easy Digital Downloads' },
  { key: 'ecwid', name: 'Ecwid' },
  { key: 'ekm', name: 'Ekm' },
  { key: 'epages', name: 'ePages' },
  { key: 'etsy', name: 'Etsy' },
  { key: 'gambio', name: 'Gambio' },
  { key: 'godaddy', name: 'GoDaddy' },
  { key: 'hhgmulti', name: 'HHG multistore' },
  { key: 'hikashop', name: 'HikaShop' },
  { key: 'interspire', name: 'Interspire' },
  { key: 'jigoshop', name: 'Jigoshop' },
  { key: 'joomshopping', name: 'JoomShopping' },
  { key: 'lightspeed', name: 'Lightspeed' },
  { key: 'litecart', name: 'LiteCart' },
  { key: 'loaded', name: 'Loaded Commerce' },
  { key: 'loaded7', name: 'Loaded 7' },
  { key: 'magento', name: 'Magento' },
  { key: 'market', name: 'MarketPress' },
  { key: 'merchium', name: 'Merchium' },
  { key: 'mijo', name: 'MijoShop' },
  { key: 'mivamerchant', name: 'Miva Merchant' },
  { key: 'mystore', name: 'Mystore.no' },
  { key: 'neto', name: 'Neto' },
  { key: 'nopcommerce', name: 'nopCommerce' },
  { key: 'opencart', name: 'OpenCart' },
  { key: 'oscmax', name: 'oscMax' },
  { key: 'oscommerce', name: 'OsCommerce' },
  { key: 'oxideshop', name: 'OXID-eShop' },
  { key: 'palundu', name: 'Palundu' },
  { key: 'pinnaclecart', name: 'PinnacleCart' },
  { key: 'prestashop', name: 'PrestaShop' },
  { key: '3dcart', name: 'Shift4Shop' },
  { key: 'shopify', name: 'Shopify' },
  { key: 'shopp', name: 'Shopp' },
  { key: 'shopsite', name: 'ShopSite' },
  { key: 'shopware', name: 'Shopware' },
  { key: 'squarespace', name: 'Squarespace' },
  { key: 'squirre', name: 'Squirrelcart' },
  { key: 'storeden', name: 'Storeden' },
  { key: 'summercart', name: 'Summer Cart' },
  { key: 'sunshop', name: 'SunShop' },
  { key: 'thirtybees', name: 'Thirty Bees' },
  { key: 'tomatocart', name: 'TomatoCart' },
  { key: 'ubercart', name: 'Ubercart' },
  { key: 'veyton', name: 'Veyton' },
  { key: 'virtuemart', name: 'VirtueMart' },
  { key: 'volusion', name: 'Volusion' },
  { key: 'weebly', name: 'Weebly' },
  { key: 'wix', name: 'Wix' },
  { key: 'woocommerce', name: 'WooCommerce' },
  { key: 'wpestore', name: 'WP eStore' },
  { key: 'wponline', name: 'WP Online Store' },
  { key: 'wpecommerce', name: 'Wp-Ecommerce' },
  { key: 'xcart', name: 'X-Cart' },
  { key: 'xtcommerce', name: 'Xt:Commerce' },
  { key: 'yahoostore', name: 'Yahoo Store/Aabaco' },
  { key: 'zencart', name: 'ZenCart' },
  { key: 'jshop', name: 'Jshop Server' },
  { key: 'zoey', name: 'Zoey' },
  { key: 'csv', name: 'CSV Files' },
  { key: 'dbdump', name: 'Database Dump' },
  { key: 'custom', name: 'Custom Cart' },
  { key: 'jimdo', name: 'Jimdo' },
  { key: 'vend', name: 'Vend' },
  { key: 'salesforce', name: 'Salesforce' },
  { key: 'smartweb', name: 'SmartWeb' },
  { key: 'commercehq', name: 'CommerceHQ' },
  { key: 'helcimcommerce', name: 'HelcimCommerce' },
  { key: 'joocart', name: 'JooCart' },
  { key: 'memberpress', name: 'MemberPress' },
  { key: 'premmerce', name: 'Premmerce' },
  { key: 'redshop', name: 'redSHOP' },
  { key: 'sellacious', name: 'Sellacious' },
  { key: 'shopscript', name: 'Shop-Script' },
  { key: 'shoptab', name: 'ShopTab' },
  { key: 'sparkpay', name: 'Spark Pay' },
  { key: 'storenvy', name: 'Storenvy' },
  { key: 'visualsoft', name: 'VisualSoft' },
  { key: 'yokart', name: 'Yokart' },
  { key: 'facebook', name: 'Facebook' },
  { key: 'google', name: 'Google' },
  { key: 'j2store', name: 'J2 Store' },
  { key: 'wordpress', name: 'WordPress' },
  { key: 'joomla', name: 'Joomla' },
  { key: 'square', name: 'Square' },
  { key: 'eshop', name: 'Eshop' },
  { key: 'base', name: 'Base' },
  { key: 'instagram', name: 'Instagram' },
  { key: 'shopee', name: 'Shopee' },
  { key: 'lazada', name: 'Lazada' },
  { key: 'alibaba', name: 'Alibaba' },
  { key: 'googlemerchant', name: 'Google Merchant' },
  { key: 'wish', name: 'Wish' },
  { key: 'rakuten', name: 'Rakuten' },
  { key: 'aliexpress', name: 'Aliexpress' },
  { key: 'walmart', name: 'Walmart' },
  { key: 'shopbase', name: 'ShopBase' },
  { key: 'mercadolivre', name: 'Mercado Livre' },
  { key: 'flipkart', name: 'Flipkart' },
  { key: 'stores', name: 'Stores' }
];

// Target platforms (from the "Target Cart Type" section in the text file)
export const targetPlatforms: Platform[] = [
  { key: '3dcart', name: 'Shift4Shop' },
  { key: 'amazonstore', name: 'Amazon' },
  { key: 'base', name: 'Base' },
  { key: 'bigcartel', name: 'Big Cartel' },
  { key: 'bigcommerce', name: 'BigCommerce' },
  { key: 'cscart', name: 'CS-Cart' },
  { key: 'drupal', name: 'Drupal Commerce' },
  { key: 'easy', name: 'Easy Digital Downloads' },
  { key: 'ecwid', name: 'Ecwid' },
  { key: 'etsy', name: 'Etsy' },
  { key: 'facebook', name: 'Facebook' },
  { key: 'gambio', name: 'Gambio' },
  { key: 'google', name: 'Google Merchant' },
  { key: 'hikashop', name: 'HikaShop' },
  { key: 'joomla', name: 'Joomla' },
  { key: 'lightspeed', name: 'Lightspeed' },
  { key: 'magento', name: 'Magento' },
  { key: 'mivamerchant', name: 'Miva Merchant' },
  { key: 'neto', name: 'Neto' },
  { key: 'nopcommerce', name: 'nopCommerce' },
  { key: 'opencart', name: 'OpenCart' },
  { key: 'oscommerce', name: 'OsCommerce' },
  { key: 'oxideshop', name: 'OXID-eShop' },
  { key: 'prestashop', name: 'PrestaShop' },
  { key: 'shopify', name: 'Shopify' },
  { key: 'shopware', name: 'Shopware' },
  { key: 'squarespace', name: 'Squarespace' },
  { key: 'stores', name: 'Stores' },
  { key: 'ubercart', name: 'Ubercart' },
  { key: 'virtuemart', name: 'VirtueMart' },
  { key: 'weebly', name: 'Weebly' },
  { key: 'wish', name: 'Wish' },
  { key: 'wix', name: 'Wix' },
  { key: 'woocommerce', name: 'WooCommerce' },
  { key: 'wordpress', name: 'WordPress' },
  { key: 'xcart', name: 'X-Cart' },
  { key: 'zencart', name: 'ZenCart' },
  { key: 'vend', name: 'Vend' }
]; 