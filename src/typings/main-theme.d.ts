import 'styled-components';
import { MainTheme } from 'styles';

type MainTheme = typeof MainTheme;

declare module 'styled-components' {
  export interface DefaultTheme extends MainTheme {}
}
