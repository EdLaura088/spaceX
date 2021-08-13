const useTechInfo = ({ name, ship, isShip }) => {
    const header = name.toUpperCase();
	

	const firstRow={
		title:isShip ? 'NAME' : 'HEIGHT',
		value: isShip ? ship.name :ship.roles ,
	};
	const secondRow={
		title:isShip ? 'ROLES' : 'HOME PORT',
				value: isShip ? ship.roles : ship.home_port ,

	};
	const body=[firstRow,secondRow];
	const img= `../assets/${name.replace(/\\s+/g,'')}.png`;
	return{
		
		body,
        img,
        header
	};
};

export default useTechInfo;