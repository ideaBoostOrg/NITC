import React, { createContext, useState, useMemo } from 'react';
import PropTypes from 'prop-types';

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
	const [data, setData] = useState('aaa');
	const [customer, setCustomer] = useState('test');

	const value = useMemo(
		() => ({
			data,
			setData,
			customer,
			setCustomer,
		}),
		[data, customer]
	);

	return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};
DataProvider.propTypes = {
	children: PropTypes.node.isRequired,
};

export default DataContext;
