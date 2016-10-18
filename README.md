## granite-bootstrap

*granite-bootstrap* is a wrapping of [Bootstrap](http://getbootstrap.com/) CSS as [Polymer](https://www.polymer-project.org/) [shared styles](https://www.polymer-project.org/1.0/docs/devguide/styling.html#style-modules) modules (i.e. inside `<dom-module>` tags).

> This project replaces and updates [polymer-bootstrap](https://github.com/LostInBrittany/polymer-boostrap), that won't be updated anymore

### Using *granite-bootstrap* modules

Using  polymer [shared styles](https://www.polymer-project.org/1.0/docs/devguide/styling.html#style-modules) modules is a two-step process: you need to use a `<link>` tag to import the module, and a `<style>` tag to include the styles in the correct place.

To use *granite-bootstrap* in an element:

#### 1. Add the dependency

Add the dependency to the `bower.json` of your application:

```
   "dependencies": {
     [...]
     "granite-bootstrap": "granite-bootstrap#0.1.1"
   }
``` 

And then recover them via `bower install`.


#### 2. Import the *granite-bootstrap* module you want to use

Usually you will simply want to import `granite-bootstrap.html` (wrap around `bootstrap.css`) or `granite-bootstrap-min.html`
(wrap around `bootstrap.min.css`).

Supossing you're using the standard folder locations for your components:
 
```
<link rel="import" href="../granite-bootstrap/granite-bootstrap.html">
``` 

#### 3. Inside your component, use *granite-bootstrap* as shared style

In your element's template you add the include for the *granite-bootstrap* module:

```
<style include="granite-bootstrap"></style>
```
 

#### A complete example

```
<!-- import the module  -->
<link rel="import" href="../granite-bootstrap/granite-bootstrap.html">
<dom-module id="x-foo">
  <template>
    <!-- include the style module by name -->
    <style include="granite-bootstrap"></style>
    <style>:host { display: block; }</style>
    Hi
  </template>
  <script>Polymer({is: 'x-foo'});</script>
</dom-module>
```
 



### Generating the elements

#### 1. Recover Bootstrap 

Recover Bootstrap distribution using `bower install`:

```
$ bower install
bower bootstrap#~3.3.7          cached https://github.com/twbs/bootstrap.git#3.3.6
bower bootstrap#~3.3.7        validate 3.3.6 against https://github.com/twbs/bootstrap.git#~3.3.6
bower jquery#1.9.1 - 2          cached https://github.com/jquery/jquery-dist.git#2.2.3
bower jquery#1.9.1 - 2        validate 2.2.3 against https://github.com/jquery/jquery-dist.git#1.9.1 - 2
bower bootstrap#~3.3.6         install bootstrap#3.3.6
bower jquery#1.9.1 - 2         install jquery#2.2.3

bootstrap#3.3.7 bower_components/bootstrap
└── jquery#2.2.3
```

Currently *granite-bootstrap* uses Bootstrap version 3.3.6, if you need another version you can change it in `bower.json` file.


#### 2. Generate the components

Using NodeJS and the `granite-bootstrap-generator.js` to transform Bootstrap CSS files into polymer elements.

You need to do a `npm install` to recover the rependencies and then `node  granite-bootstrap-generator.js` to execute the script:

```
$ npm install
granite-bootstrap@0.1.0 /home/horacio/cityzendata/git/webcomponents/granite-bootstrap
└─┬ fs-extra@0.30.0 
  ├── graceful-fs@4.1.3 
  ├── jsonfile@2.3.0 
  ├── klaw@1.2.0 
  ├── path-is-absolute@1.0.0 
  └─┬ rimraf@2.5.2 
    └─┬ glob@7.0.3 
      ├─┬ inflight@1.0.4 
      │ └── wrappy@1.0.1 
      ├── inherits@2.0.1 
      ├─┬ minimatch@3.0.0 
      │ └─┬ brace-expansion@1.1.4 
      │   ├── balanced-match@0.4.1 
      │   └── concat-map@0.0.1 
      └── once@1.3.3 

$ node granite-bootstrap-generator.js
```

After executing it, a series of HTML files is generated in the folder, each one corresponding to a Bootstrap CSS file.

```
$ ls *.html
granite-bootstrap.html  granite-bootstrap-min.html  granite-bootstrap-theme.html  granite-bootstrap-theme-min.html
```


## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## License

[Apache 2.0](http://www.apache.org/licenses/LICENSE-2.0)
