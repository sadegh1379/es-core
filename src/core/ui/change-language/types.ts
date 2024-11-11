interface IChangeLanguagePropTypes {
	className?: string;
	status: boolean;
	setStatus: (status: boolean) => void;
	onLanguageClick: (lng: TLanguage) => void;
}

export type { IChangeLanguagePropTypes };
