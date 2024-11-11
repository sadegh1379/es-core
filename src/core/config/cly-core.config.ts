interface IClyCoreConfig {
	LANGUAGE: 'en' | 'ru' | 'fa' | 'ar' | 'de' | 'es';
	DOCS_PARTNER_URL: string;
	APP_VERSION: string;
}

const ClyCoreConfig: IClyCoreConfig = {
	LANGUAGE: 'en',
	DOCS_PARTNER_URL: 'https://docs-partner.coinlocally.com/',
	APP_VERSION: '0.0.0',
};

export default ClyCoreConfig;
