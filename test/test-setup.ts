import { join } from 'path';
import addJestHbsExtension from 'jest-hbs-extension';

const VIEWS_PATH = join(__dirname, '..', 'views');
addJestHbsExtension(VIEWS_PATH);
