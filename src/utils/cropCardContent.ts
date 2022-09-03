import { SCREENS } from './constants/screenSizes';
import {
  MAX_ARTICLE_LENGTH_MOBILE,
  MAX_ARTICLE_LENGTH_DESKTOP,
} from './constants/maxValues';

const { breakpoint700 } = SCREENS;

const cropCardContent = (content: string, width: number): string => {
  const isMobile = width > breakpoint700 ? false : true;
  if (isMobile && content.length > MAX_ARTICLE_LENGTH_MOBILE) {
    return content.slice(0, MAX_ARTICLE_LENGTH_MOBILE) + ' ...';
  } else if (!isMobile && content.length > MAX_ARTICLE_LENGTH_DESKTOP) {
    return content.slice(0, MAX_ARTICLE_LENGTH_DESKTOP) + ' ...';
  } else return content;
};

export default cropCardContent;
