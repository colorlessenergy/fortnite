const NavMenu = () => {
	return (
		<div className="nav-menu">
			<ul className="flex-1">
				<li>
					<a className="text text-uppercase text-gray py-1 px-3 nav-menu__item" href="/">
						modes
					</a>
				</li>
				<li>
					<a className="text text-uppercase text-gray py-1 px-3 nav-menu__item" href="/">
						battle pass
					</a>
				</li>
			</ul>

			<form className="nav-menu__form flex align-items-center justify-content-center">
				<label className="d-none" htmlFor="search">
					search
				</label>
				<input className="nav-menu__input p-1" type="text" autoComplete="off" placeholder="Search..." />

				<button className="nav-menu__button">
					<i class="las la-search"></i>
				</button>
			</form>

			<div className="cursor-pointer flex bt-1-black-3">
				<div className="nav-menu__sign-in py-1 flex justify-content-center align-items-center">
					<div className="position-relative">
						<i className="las la-user"></i>
						<div className="user-status"></div>
					</div>

					<span className="text-small text-gray text-uppercase ml-1">sign in</span>
				</div>

				<div className="py-1 flex justify-content-center align-items-center flex-1">
					<i className="las la-globe"></i>
				</div>
			</div>
		</div>
	);
};

export default NavMenu;
