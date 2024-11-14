interface IPackageConfig {
	LANGUAGE: 'en' | 'ru' | 'fa' | 'ar' | 'de' | 'es';
	APP_VERSION: string;
}

const PackageConfig: IPackageConfig = {
	LANGUAGE: 'en',
	APP_VERSION: '0.0.0',
};

export default PackageConfig;
