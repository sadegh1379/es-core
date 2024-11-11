import { ClyCoreConfig } from 'core/config';
import TranslationWrapper from 'helper/utils/translate-wrapper';
import { ArrowDownBold, ArrowLeftMiniOutline, Coinlocally, GlobalOutline, QrCodeDownload } from 'icons';
import { FC, useState } from 'react';
import { Trans, useTranslation } from 'react-i18next';
import { H4 } from '../headings';
import styles from './footer.module.css';
import { FooterPropTypes } from './types';
import { ChangeLanguageModal } from '../change-language';

const Footer: FC<FooterPropTypes> = ({ onChatClick, onContactUs, onLanguageClickHandler }) => {
	const [openSection, setOpenSection] = useState<string>('');
	const [lngModalStatus, setLngModalStatus] = useState<boolean>(false);

	const { t } = useTranslation('footer');

	const { LANGUAGE, DOCS_PARTNER_URL, APP_VERSION } = ClyCoreConfig;

	const languages: [string, TLanguage][] = [
		['English', 'en'],
		['العربية', 'ar'],
		['русский', 'ru'],
		['فارسی', 'fa'],
		['deutsch', 'de'],
		['español', 'es'],
	];

	const setOpenSectionClickHandler = (section: string) => {
		if (section === openSection) {
			setOpenSection('');
		} else {
			setOpenSection(section);
		}
	};
	return (
		<TranslationWrapper>
			<footer className={styles.main_container}>
				<div className={styles.footer_flex_container}>
					<div className={styles.footer_container}>
						<div className={`${styles.column_container} ${styles.column_company}`}>
							<div className={styles.column_header} onClick={() => setOpenSectionClickHandler('Company')} id='footer_company'>
								<H4>{t('company')}</H4>
								<ArrowDownBold className={styles.header_arrow_down} />
							</div>
							<div className={`${styles.footer_links_container} ${openSection === 'Company' ? styles.active : ''}`}>
								<a className={styles.footer_item} href={`/${LANGUAGE}/about-us`} id='footer_company_about_us'>
									{t('about-us')}
								</a>
								<a className={styles.footer_item} href={`/${LANGUAGE}/policy`} id='footer_company_policy'>
									{t('policy-aml')}
								</a>
								<a className={styles.footer_item} href={`/${LANGUAGE}/terms`} id='footer_company_terms'>
									{t('terms-of-use')}
								</a>
								<a className={styles.footer_item} href={`/${LANGUAGE}/community`} id='footer_company_community'>
									{t('community')}
								</a>
								<a className={styles.footer_item} href={`/${LANGUAGE}/partnership`} id='footer_company_partnership'>
									{t('partnership')}
								</a>
								<a className={styles.footer_item} href='https://coinlocally.com/e-learning/' id='footer_company_e_learning'>
									{t('e-learning')}
								</a>
							</div>
						</div>
						<div className={`${styles.column_container} ${styles.column_products}`}>
							<div
								className={styles.column_header}
								onClick={() => setOpenSectionClickHandler('Products')}
								id='footer_products'
							>
								<H4>{t('products')}</H4>
								<ArrowDownBold className={styles.header_arrow_down} />
							</div>
							<div className={`${styles.footer_links_container} ${openSection === 'Products' ? styles.active : ''}`}>
								<a className={styles.footer_item} href={`/${LANGUAGE}/market`} id='footer_products_market'>
									{t('market')}
								</a>
								<a
									className={styles.footer_item}
									href={`https://coinlocally.com/${LANGUAGE}/spot/BTC_USDT`}
									id='footer_products_spot'
								>
									{t('spot-trading')}
								</a>

								<a
									className={styles.footer_item}
									href='https://coinlocally.com/en/futures/BTC_USDT'
									id='footer_products_futures'
								>
									{t('futures-trading')}
								</a>
								<a
									className={styles.footer_item}
									target='_blank'
									href='https://demo.coinlocally.com'
									rel='noopener noreferrer'
									id='footer_products_demo'
								>
									{t('demo-trading')}
								</a>
								<a className={styles.footer_item} href={`/${LANGUAGE}/buy-crypto/mercuryo`} id='footer_products_mercuryo'>
									{t('buy-crypto')}
								</a>
								{/* <a className={styles.footer_item} href={`/${LANGUAGE}/nft/marketplace`} id='footer_products_marketplace'>
									{t('nft-market-place')}
								</a> */}
								<a className={styles.footer_item} href={`/${LANGUAGE}/deposit`} id='footer_products_deposit'>
									{t('coinlocally-wallet')}
								</a>
								<a
									className={styles.footer_item}
									href={DOCS_PARTNER_URL}
									target='_blank'
									rel='noopener noreferrer'
									id='footer_products_api_doc'
								>
									{t('api-document')}
								</a>
							</div>
						</div>
						<div className={`${styles.column_container} ${styles.column_support}`}>
							<div className={styles.column_header} onClick={() => setOpenSectionClickHandler('Support')} id='footer_support'>
								<H4>{t('support')}</H4>
								<ArrowDownBold className={styles.header_arrow_down} />
							</div>
							<div className={`${styles.footer_links_container} ${openSection === 'Support' ? styles.active : ''}`}>
								<div className={styles.footer_item} onClick={onContactUs} id='footer_support_contact_us'>
									{t('contact-us')}
								</div>
								<a className={styles.footer_item} href={`/${LANGUAGE}/insurance`} id='footer_support_insurance'>
									{t('insurance')}
								</a>
								<a className={styles.footer_item} href={`/${LANGUAGE}/supportTicket`} id='footer_support_ticket'>
									{t('submit-a-ticket')}
								</a>
								<div className={styles.footer_item} onClick={onChatClick} id='footer_support_chat'>
									{t('chat-online')}
								</div>
								<a className={styles.footer_item} href={`/${LANGUAGE}/FAQ`} id='footer_support_faq'>
									{t('faq')}
								</a>
								<a
									className={styles.footer_item}
									href={`/${LANGUAGE}/announcement/category`}
									id='footer_support_announcement'
								>
									{t('announcement-and-news')}
								</a>
							</div>
						</div>
						<div className={`${styles.column_container} ${styles.column_services}`}>
							<div
								className={styles.column_header}
								onClick={() => setOpenSectionClickHandler('Services')}
								id='footer_services'
							>
								<H4>{t('services')}</H4>
								<ArrowDownBold className={styles.header_arrow_down} />
							</div>
							<div className={`${styles.footer_links_container} ${openSection === 'Services' ? styles.active : ''}`}>
								<a className={styles.footer_item} href={`/${LANGUAGE}/download`} id='footer_services_download'>
									{t('download-app')}
								</a>
								<a className={styles.footer_item} href={`/${LANGUAGE}/landing/testFlight`} id='footer_services_testFlight'>
									{t('ios-early-access')}
								</a>

								<a className={styles.footer_item} href={`/${LANGUAGE}/rules`} id='footer_services_rules'>
									{t('trading-rules')}
								</a>
								<a className={styles.footer_item} href={`/${LANGUAGE}/fees`} id='footer_services_fees'>
									{t('fees-and-conditions')}
								</a>
								<a className={styles.footer_item} href={`/${LANGUAGE}/vip-portal`} id='footer_services_vip_portal'>
									{t('vip-portal')}
								</a>
								<a className={styles.footer_item} href={`/${LANGUAGE}/affiliate`} id='footer_services_affiliate'>
									{t('affiliate')}
								</a>
								<a className={styles.footer_item} href={`/${LANGUAGE}/referral`} id='footer_services_referral_program'>
									{t('referral')}
								</a>
							</div>
						</div>
						<div className={`${styles.column_container} ${styles.column_buy_crypto}`}>
							<div className={styles.column_header} onClick={() => setOpenSectionClickHandler('Crypto')} id='footer_crypto'>
								<H4>{t('buy-crypto')}</H4>
								<ArrowDownBold className={styles.header_arrow_down} />
							</div>
							<div className={`${styles.footer_links_container} ${openSection === 'Crypto' ? styles.active : ''}`}>
								<a
									className={styles.footer_item}
									href={`/${LANGUAGE}/buy-crypto/mercuryo?pair=BTC-USD`}
									id='footer_crypto_BTC'
								>
									{t('buy-bitcoin')}
								</a>
								<a
									className={styles.footer_item}
									href={`/${LANGUAGE}/buy-crypto/mercuryo?pair=BNB-USD`}
									id='footer_crypto_BNB'
								>
									{t('buy-bnb')}
								</a>
								<a
									className={styles.footer_item}
									href={`/${LANGUAGE}/buy-crypto/mercuryo?pair=ETH-USD`}
									id='footer_crypto_ETH'
								>
									{t('buy-ethereum')}
								</a>
								<a
									className={styles.footer_item}
									href={`/${LANGUAGE}/buy-crypto/mercuryo?pair=USDT-USD`}
									id='footer_crypto_USDT'
								>
									{t('buy-usdt')}
								</a>
								<a
									className={styles.footer_item}
									href={`/${LANGUAGE}/buy-crypto/mercuryo?pair=1Inch-USD`}
									id='footer_crypto_1Inch'
								>
									{t('buy-1inch')}
								</a>
								<a
									className={styles.footer_item}
									href={`/${LANGUAGE}/buy-crypto/mercuryo?pair=TRX-USD`}
									id='footer_crypto_TRX'
								>
									{t('buy-tron')}
								</a>
								<a
									className={styles.footer_item}
									href={`/${LANGUAGE}/buy-crypto/mercuryo?pair=BCH-USD`}
									id='footer_crypto_BCH'
								>
									{t('buy-bitcash')}
								</a>
							</div>
						</div>
						<div className={`${styles.column_container} ${styles.column_logo}`}>
							<Coinlocally className={styles.coinlocally_logo} />

							{onLanguageClickHandler && (
								<div className={styles.footer_lang_selector} onClick={() => setLngModalStatus(true)}>
									<div className={styles.footer_lng_box}>
										<GlobalOutline className={styles.footer_lng_glob} />
										<span>{languages.find(item => item[1] === LANGUAGE)![0]}</span>
									</div>
									<ArrowLeftMiniOutline className={styles.footer_lng_arrow} />
								</div>
							)}
							<div className={styles.footer_qr_container}>
								<div className={styles.footer_qr_square}>
									<QrCodeDownload />
								</div>
								<div className={styles.footer_qr_text}>{t('scan-to-download-coinlocally-app')}</div>
							</div>
						</div>
					</div>

					<div className={styles.footer_socials_container}>
						<div className={styles.footer_community}>{t('community')}</div>
						<div className={styles.social_items}>
							<a
								href='https://t.me/Coinlocally'
								target='_blank'
								rel='noopener noreferrer'
								className={styles.footer_social_item}
								id='footer_telegram'
							>
								<svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
									<path
										d='M2.91512 11.8078C9.19912 9.04334 17.3311 5.67284 18.4536 5.20634C21.3981 3.98534 22.3016 4.21934 21.8511 6.92334C21.5276 8.86684 20.5941 15.3013 19.8501 19.3063C19.4086 21.6813 18.4181 21.9628 16.8606 20.9353C16.1116 20.4408 12.3311 17.9408 11.5106 17.3538C10.7616 16.8188 9.72862 16.1753 11.0241 14.9078C11.4851 14.4563 14.5071 11.5708 16.8616 9.32484C17.1701 9.02984 16.7826 8.54534 16.4266 8.78184C13.2531 10.8863 8.85312 13.8073 8.29312 14.1878C7.44712 14.7623 6.63462 15.0258 5.17612 14.6068C4.07412 14.2903 2.99762 13.9128 2.57862 13.7688C0.965116 13.2148 1.34812 12.4973 2.91512 11.8078Z'
										fill='currentColor'
									/>
								</svg>
							</a>
							<a
								href='https://instagram.com/coinlocally/'
								target='_blank'
								rel='noopener noreferrer'
								className={styles.footer_social_item}
								id='footer_instagram'
							>
								<svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
									<path
										d='M8.25 2.5C5.0795 2.5 2.5 5.0795 2.5 8.25V15.75C2.5 18.9205 5.0795 21.5 8.25 21.5H15.75C18.9205 21.5 21.5 18.9205 21.5 15.75V8.25C21.5 5.0795 18.9205 2.5 15.75 2.5H8.25ZM17 6C17.5525 6 18 6.4475 18 7C18 7.552 17.5525 8 17 8C16.4475 8 16 7.552 16 7C16 6.4475 16.4475 6 17 6ZM12 7C14.757 7 17 9.243 17 12C17 14.757 14.757 17 12 17C9.243 17 7 14.757 7 12C7 9.243 9.243 7 12 7ZM12 8.5C11.5404 8.5 11.0852 8.59053 10.6606 8.76642C10.236 8.94231 9.85013 9.20012 9.52513 9.52513C9.20012 9.85013 8.94231 10.236 8.76642 10.6606C8.59053 11.0852 8.5 11.5404 8.5 12C8.5 12.4596 8.59053 12.9148 8.76642 13.3394C8.94231 13.764 9.20012 14.1499 9.52513 14.4749C9.85013 14.7999 10.236 15.0577 10.6606 15.2336C11.0852 15.4095 11.5404 15.5 12 15.5C12.4596 15.5 12.9148 15.4095 13.3394 15.2336C13.764 15.0577 14.1499 14.7999 14.4749 14.4749C14.7999 14.1499 15.0577 13.764 15.2336 13.3394C15.4095 12.9148 15.5 12.4596 15.5 12C15.5 11.5404 15.4095 11.0852 15.2336 10.6606C15.0577 10.236 14.7999 9.85013 14.4749 9.52513C14.1499 9.20012 13.764 8.94231 13.3394 8.76642C12.9148 8.59053 12.4596 8.5 12 8.5V8.5Z'
										fill='currentColor'
									/>
								</svg>
							</a>
							<a
								href='https://www.pinterest.com/coinlocally_exchange/'
								target='_blank'
								rel='noopener noreferrer'
								className={styles.footer_social_item}
								id='footer_pinterest'
							>
								<svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
									<path
										d='M12 2C6.486 2 2 6.486 2 12C2 16.324 4.7635 20.005 8.6135 21.397C8.5735 20.789 8.5 19.61 8.5 19.2085C8.5 18.208 8.6145 17.9075 8.6145 17.9075L9.748 13.193C9.5805 12.703 9.5 12.1535 9.5 11.6405C9.5 10.695 10.1095 9.75 11 9.75C11.661 9.75 12.25 10.25 12.25 11.2265C12.25 11.516 12.21 11.856 12.1095 12.2535L11.7275 13.765C11.613 14.1975 11.5245 15.0295 11.8965 15.518C12.1085 15.7955 12.4785 15.963 13 16C15.061 16 16 13.797 16 11.75C16 7.619 12.409 7.5 12 7.5C9.5185 7.5 7.5 9.3505 7.5 11.625C7.5 12.5925 7.8 13.305 8.158 13.8175C8.2295 13.92 8.258 14.0455 8.2285 14.167L7.949 15.329C7.91 15.4915 7.707 15.558 7.5865 15.4425C6.5755 14.471 6 13.115 6 11.625C6 8.5235 8.6915 6 12 6C15.4205 6 18 8.4185 18 11.625C18 14.8645 15.869 17.5 13.25 17.5C12.2795 17.5 11.5195 17.2385 10.979 16.728L10.464 18.766C10.2045 19.711 9.888 20.5755 9.0625 21.558C9.992 21.8445 10.978 22 12 22C17.514 22 22 17.514 22 12C22 6.486 17.514 2 12 2Z'
										fill='currentColor'
									/>
								</svg>
							</a>
							<a
								href='https://twitter.com/coinlocallyclyc'
								target='_blank'
								rel='noopener noreferrer'
								className={styles.footer_social_item}
								id='footer_twitter'
							>
								<svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
									<path
										d='M10.4448 8.26511L16.3887 16.7349H14.8085L8.87522 8.26511H10.4448ZM22 7.22222V17.7778C22 20.1095 20.1095 22 17.7778 22H7.22222C4.8905 22 3 20.1095 3 17.7778V7.22222C3 4.8905 4.8905 3 7.22222 3H17.7778C20.1095 3 22 4.8905 22 7.22222ZM18.3457 17.7778L13.9271 11.455L17.5392 7.22222H16.1554L13.3012 10.5578L10.9716 7.22222H6.90767L11.0676 13.1682L7.123 17.7778H8.53006L11.6978 14.0664L14.2923 17.7778H18.3457Z'
										fill='currentColor'
									/>
								</svg>
							</a>
							<a
								href='https://medium.com/@coinlocally.exchange'
								target='_blank'
								rel='noopener noreferrer'
								className={styles.footer_social_item}
								id='footer_medium'
							>
								<svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
									<path
										d='M7.25 6.06445C6.42924 6.06445 5.61651 6.22611 4.85823 6.54021C4.09994 6.8543 3.41095 7.31467 2.83058 7.89504C2.25022 8.4754 1.78984 9.1644 1.47575 9.92268C1.16166 10.681 1 11.4937 1 12.3145C1 13.1352 1.16166 13.9479 1.47575 14.7062C1.78984 15.4645 2.25022 16.1535 2.83058 16.7339C3.41095 17.3142 4.09994 17.7746 4.85823 18.0887C5.61651 18.4028 6.42924 18.5645 7.25 18.5645C8.07076 18.5645 8.88349 18.4028 9.64177 18.0887C10.4001 17.7746 11.0891 17.3142 11.6694 16.7339C12.2498 16.1535 12.7102 15.4645 13.0242 14.7062C13.3383 13.9479 13.5 13.1352 13.5 12.3145C13.5 11.4937 13.3383 10.681 13.0242 9.92268C12.7102 9.1644 12.2498 8.4754 11.6694 7.89504C11.0891 7.31467 10.4001 6.8543 9.64177 6.54021C8.88349 6.22611 8.07076 6.06445 7.25 6.06445V6.06445ZM19.865 10.605C19.836 10.425 19.802 10.2485 19.764 10.0765C19.688 9.73245 19.595 9.40545 19.4875 9.09995C19.4335 8.94695 19.376 8.79945 19.315 8.65745C19.0705 8.08945 18.77 7.61295 18.43 7.25895C18.005 6.81645 17.518 6.56495 17 6.56495C16.482 6.56495 15.995 6.81645 15.57 7.25895C15.23 7.61295 14.9295 8.08945 14.685 8.65745C14.624 8.79945 14.566 8.94695 14.5125 9.09995C14.4045 9.40595 14.312 9.73295 14.236 10.0765C14.198 10.2485 14.1645 10.4245 14.135 10.605C14.047 11.145 14 11.7195 14 12.3145C14 15.49 15.343 18.0645 17 18.0645C18.657 18.0645 20 15.49 20 12.3145C20 11.7195 19.953 11.145 19.865 10.605ZM21.75 7.06445C21.0595 7.06445 20.5 9.41495 20.5 12.3145C20.5 12.4955 20.502 12.675 20.5065 12.8515C20.532 13.9105 20.6325 14.8765 20.7855 15.654C20.8365 15.9135 20.893 16.1515 20.955 16.3655C21.0165 16.5795 21.0835 16.769 21.1545 16.9305C21.3315 17.3345 21.5345 17.564 21.7505 17.564C21.9665 17.564 22.169 17.3345 22.3465 16.9305C22.4175 16.769 22.484 16.5795 22.546 16.3655C22.6075 16.1515 22.6645 15.913 22.7155 15.654C22.8685 14.876 22.969 13.9105 22.9945 12.8515C22.998 12.675 23 12.496 23 12.3145C23 9.41495 22.4405 7.06445 21.75 7.06445Z'
										fill='currentColor'
									/>
								</svg>
							</a>
						</div>
					</div>

					<div className={styles.risk_container}>
						<div className={styles.risk_title}>{t('risk-disclaimer')}</div>
						<p className={styles.risk_description}>
							<Trans components={{ br: <br /> }}>{t('risk-description')}</Trans>
						</p>
					</div>
					<div className={styles.footer_divider}></div>

					<small className={styles.footer_copyright}>
						© {new Date().getFullYear()}, {t('coinlocally-reserve')} - v{APP_VERSION}
					</small>
				</div>
			</footer>
			{lngModalStatus && onLanguageClickHandler && (
				<ChangeLanguageModal status={lngModalStatus} setStatus={setLngModalStatus} onLanguageClick={onLanguageClickHandler} />
			)}
		</TranslationWrapper>
	);
};

export default Footer;
