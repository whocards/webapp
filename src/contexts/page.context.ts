import React, {
	Context,
	Dispatch,
	SetStateAction,
} from 'react';

export enum Page {
	play = 'play',
	print = 'print',
	about = 'about',
}

export const PAGES: Page[] = [Page.play, Page.print, Page.about]

interface IContextProps {
	page: Page;
	setPage: Dispatch<SetStateAction<Page>>;
}

const defaultContext: IContextProps = {
	page: Page.play,
	setPage: () => {},
}

const PageContext: Context<IContextProps> = React.createContext(defaultContext)

export default PageContext
