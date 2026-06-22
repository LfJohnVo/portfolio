module.exports = function (plop) {
  plop.setGenerator('component', {
    description: 'Create a new reusable UI component or Feature',
    prompts: [
      {
        type: 'list',
        name: 'layer',
        message: 'Where should this component go?',
        choices: ['shared/ui', 'features']
      },
      {
        type: 'input',
        name: 'name',
        message: 'Component name (e.g. Button, Card, ContactForm):'
      }
    ],
    actions: function (data) {
      let pathTemplate = '';
      if (data.layer === 'shared/ui') {
        pathTemplate = 'src/shared/ui/{{pascalCase name}}.tsx';
      } else {
        pathTemplate = 'src/features/{{kebabCase name}}/{{pascalCase name}}.tsx';
      }

      return [
        {
          type: 'add',
          path: pathTemplate,
          templateFile: 'templates/component.tsx.hbs'
        }
      ];
    }
  });
};
