import bootstrap from '../src/assets/skills/bootstrap.svg';
import tailwind from '../src/assets/skills/tailwind.svg';
import react from '../src/assets/skills/react.svg';
import html from '../src/assets/skills/html.svg';
import css from '../src/assets/skills/css.svg';
import javascript from '../src/assets/skills/javascript.svg';
import java from '../src/assets/skills/java.svg';
import git from '../src/assets/skills/git.svg';
import racket from '../src/assets/skills/racket.svg';
import sass from '../src/assets/skills/sass.svg';

export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case 'html':
      return html;
    case 'css':
      return css;
    case 'javascript':
      return javascript;
    case 'tailwind':
      return tailwind;
      case 'bootstrap':
        return bootstrap;
      case 'react':
        return react;
      case 'java':
        return java;
      case 'git':
        return git;
      case 'sass':
          return sass;
      case 'racket':
          return racket;
    default:
      break;
  }
}
