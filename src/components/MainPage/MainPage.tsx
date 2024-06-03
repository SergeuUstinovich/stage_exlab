import "./mainPage.scss";

function MainPage() {
    return (
        <div className="container">
			<div className="header__container flex">
				<a className="header__logo" href="#" target="blank">
					<img
						src="../src/assets/img/Logo.png"
						alt="Логотип сайта"
						aria-label="Логотип сайта"
					/>
				</a>
				<nav className="nav header__nav flex" title="Главное меню">
					<ul className="nav__list list-reset flex">
						<li className="nav__item">
							<a href="#" className="nav__link">
								Минск
							</a>
						</li>
						<li className="nav__item">
							<a href="#" className="nav__link">
								Брест
							</a>
						</li>
						<li className="nav__item">
							<a href="#" className="nav__link">
								+375 (29) 888 88&nbsp;88
							</a>
						</li>
					</ul>
				</nav>
				<button className="btn-profile btn-reset" aria-label="Профиль">
					<svg
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<g clip-path="url(#clip0_22_114)">
							<path
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M12 0C18.623 0 24 5.377 24 12C24 18.623 18.623 24 12 24C5.377 24 0 18.623 0 12C0 5.377 5.377 0 12 0ZM20.127 19.41C19.845 19.009 19.355 18.756 18.503 18.56C14.655 17.654 14.406 17.059 14.151 16.501C13.892 15.936 13.961 15.271 14.356 14.524C16.082 11.267 16.446 8.5 15.383 6.734C14.709 5.615 13.508 5 12 5C10.479 5 9.268 5.626 8.591 6.763C7.525 8.552 7.898 11.307 9.64 14.52C10.042 15.262 10.116 15.926 9.86 16.494C9.595 17.08 9.249 17.684 5.495 18.56C4.643 18.756 4.153 19.009 3.872 19.408C5.884 21.615 8.782 23 12 23C15.218 23 18.115 21.615 20.127 19.41ZM20.777 18.628C22.172 16.784 23 14.488 23 12C23 5.929 18.071 1 12 1C5.929 1 1 5.929 1 12C1 14.487 1.827 16.783 3.222 18.626C3.631 18.174 4.271 17.816 5.271 17.585C7.296 17.123 8.647 16.749 8.949 16.083C9.071 15.811 9.01 15.455 8.761 14.996C6.844 11.461 6.479 8.355 7.731 6.251C8.584 4.82 10.139 4 12 4C13.845 4 15.391 4.808 16.24 6.218C17.491 8.297 17.136 11.413 15.24 14.992C14.995 15.455 14.936 15.813 15.061 16.086C15.366 16.754 16.705 17.124 18.728 17.585C19.728 17.815 20.368 18.175 20.777 18.628Z"
								fill="black"
							/>
						</g>
						<defs>
							<clipPath id="clip0_22_114">
								<rect width="24" height="24" fill="white" />
							</clipPath>
						</defs>
					</svg>
				</button>
			</div>
		</div>
	);
}

export default MainPage;
