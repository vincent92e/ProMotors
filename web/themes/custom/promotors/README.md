# Introduction

This is a simple FED documentation to help onboard a new front-end developer to the project, and how to approach building out, the grid, responsive and typography.

View Demo Link: [localSiteName/themes/custom/huk/asset-builds/index.html](https://hospice-uk.ddev.site:8443/themes/custom/huk/asset-builds/index.html)

This demo will show examples of different grid implementations on components, using different column amounts, show responsive capabilities etc.

Make sure to run `gulp demo` to build the requires assets in order for this to work (although `gulp` or `gulp watch` will also work, as long as assets are built).

## Requirements
- `node` - v10
- `gulp` - v2.3.0

## Build system commands (gulp)

- `gulp` — Builds everything (demo, styles, js etc.). Do this at the very beginning of cloning or anytime you want a fresh build of /asset-builds directory.
- `gulp watch` —  Does the same as gulp, but then watches for changes to styles, scripts, and demo.html, before rebuilding the requires assets. Useful whilst coding.
- `gulp demo` — Only builds the styles and demo.html into /asset-builds.

---


# The concept and approach

The idea and intended outcome is that we have a site that is in ratio for different screen widths, from the grid to the typography and all elements.

As the site responds to screen width changes, we use breakpoints on the `html` element to change the `font-size` percentage. The percentage value will directly change the sizes of all grid widths, spacing, typography and imagery.  This is because all of the elements will use a mixture of percentage, REMs and EMs for their units.

Breakpoints used elsewhere, e.g. on components, will be used, not to change the sizes of typography (although there may be exceptions we come across during the build), but for the change of layout. e.g. we change a 4 column layout (25%) into 2 rows of 2 columns (50%).

*(NOTE: This system of the components staying in ratio, relies heavily on designs being accurate when they show the typopgrahy between mobile and desktop. All typography and component elements should be designed in ratio to one another, so that the increase in one element size will require the other elements to increase in exact ratio.)*

---

# The code

## Sizing units of elements

### These are set automatically by the grid system

- Container widths (layout-container) — REMs
- column widths —  % percentage
- column gutters (padding) —  REMs

### These are in our control

- spacing (padding/margin) — REMs
- text/typography — EMs
- Images (SVGs) — EMs

---

## Setting up a grid

Markup for a grid is typically:

```html
<div class="layout-container component-name">
	<div class="row">
		<div class="component-name__col">
			Column 1
		</div>
		<div class="component-name__col">
			Column 2
		</div>
	</div>
</div>
```

You have a container, that holds a number or rows. And each row can holds a number of columns.

The container and row classes can be called directly, but the column classes will typically be named after the component, where the SCSS will define the size of these columns by calling the `col() mixin`.

The grid is based by default on 12 columns, but we have the ability to change the grid base to anything we like and we can do that per component. e.g. 10 columns.

### 1. Container

In the Base layout styles, we create two classes, for containers that we can use often in the site.

```scss
// Page container.
// This is the main container to be used.
%layout-container,
.layout-container {
  @include container();
}

// Used for narrower width article container.
// keeps the content more central and narrow so you can read it like an article.
%layout-container-narrow,
.layout-container-narrow {
  @include container($max-width: 1080px);
}
```

This is the grid container, and contains the `rows` and `columns`. It sets the `max-width` using the default value from `$container-max-width` in `_variables.scss`.

As you can see, both classes call a mixin `container();`, which sets up the necessary container styles. This mixin can be found in `_mx-layout.scss`.

You can override the `max-width` and pass in another value to create a different container size, as we have done for `.layout-container-narrow`.

### 2. Row

Next in the Base layout styles, we set up the row class, which calls the `row mixin`, from `_mx-layout.scss.`

```scss
// Grid row.
%row,
.row {
  @include row;
}
```

All this class does is provide a flexbox layout for columns to sit in.

### 3. Columns (you will interact with this the most)

Each Row, will have at least one column. We don't use a generic class for col, like we have done for the container and row, because this will vary depending on the component in the site. We would typically include the mixin with the desired parameters on the component class name. For example:

```html
<div class="layout-container my-component">
	<div class="row">
		<div class="my-component__col-left">
			Column left
		</div>
		<div class="my-component__col-right">
			Column right
		</div>
	</div>
</div>
```

```scss
.my-component {

	&__col-left {
		@include col(4); // Make it 4 columns (out of 12)
	}

	&__col-right {
		@include col(8); // Make it 8 columns (out of 12)
	}

}
```

We set up column styles using the mixin `@include col($columns)`; where `$columns` is the width of columns you want this element to span.

Usage:

- `@include col(8);` - Width: 8 cols & 7 gutters.
- `@include col(4, 4);` - Width: 4 columns & 4 gutters.
- (optional) param: `$component-layout` - Used for handling rearranging layout of columns. e.g. from quarters to halves.
    - `@include col(6, $component-layout: 'halves');` - make the column 6 cols in width (50%). and stack in two columns
- (optional) param `$column-base` - By default it is 12 columns, but we can change it for unique layouts such as 5 columns of 2 (total of 10). In this case we do the following:
    - `@include col(2, $column-base: 10);` This gives us a column of 2 col widths, on a grid of 10 cols

---

## How to do Scaling (in ratio)

In **_bs-scaling.scss. After initial setup this shouldn't need to be changed.**

```scss
html {
  font-size: 87.5%; /* Typically 14px in a lot of web browsers */
}

@include from-sm {
  font-size: 100%; /* Typically 16px in a lot of web browsers */
}
```

By changing the font-size percentage, the whole site (grid, spacing, typography) will scale accordingly. This is because everything has been setup using `%`, `rem`, `em` units.

---

## Breakpoints

These are setup in `_variables.scss`:

```scss
// Variables represent the min width values
// $bp-xs: 0px; // 0 - 599px;
$bp-sm: 600px; // 600 - 839px;
$bp-md: 840px; // 840 - 1023px;
$bp-lg: 1024px; // 1024 - 1279px;
$bp-xl: 1280px; // 1280 - 1439px;
$bp-hd: 1440px; // 1440 - 1919px;
$bp-fhd: 1920px; // 1920+
```

...and are used in your styling via mixins that use the same naming convention.

```scss

.component {
	// Mobile first
	// styles here will apply from 0px upwards

	@include from-sm {
		// styles that apply from 600px upwards
	}
	@include from-md {
		// styles that apply from 840px upwards
	}
	@include from-lg {
		// styles that apply from 1024px upwards
	}
	// etc.
}

```

All breakpoint mixins can be found in `_mx-responsive.scss`. There are a few other mixins that may be useful for certain situations

```scss

// If you want to target a specific size that isn't defined in variables.
@mixin from-breakpoint($bp) {
  @media only screen and (min-width: $bp) {
    @content;
  }
}

// The opposite of mobile first, we limit upto a certain breakpoint
@mixin upto-breakpoint($bp) {
  @media only screen and (max-width: $bp - 1) {
    @content;
  }
}

// Target specifically between two breakpoints.
@mixin between-breakpoint($bp-from, $bp-to) {
  @media only screen and (min-width: $bp-from) and (max-width: $bp-to - 1) {
    @content;
  }
}
```
