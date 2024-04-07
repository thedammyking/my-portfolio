import React from 'react';
import { ThemeMode } from 'src/types/globals';

const useSetThemeToDocument = (mode: ThemeMode) => {
	const setThemeToDocument = React.useCallback(() => {
		const htmlClassList = document.querySelector('html')?.classList;

		if (mode === ThemeMode.Dark) {
			htmlClassList?.remove(ThemeMode.Light);
		}
		if (mode === ThemeMode.Light) {
			htmlClassList?.remove(ThemeMode.Dark);
		}

		htmlClassList?.add(mode);
	}, [mode]);

	React.useEffect(() => {
		setThemeToDocument();
	}, [mode, setThemeToDocument]);
};

export default useSetThemeToDocument;
