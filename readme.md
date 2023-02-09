# MSS Website

## Common Operations

### Changing committee

 1. Upload the photos for the new committee to `src/assets`. Remove any photos no longer needed.
 2. Edit `_data/exec.json` for the new committee.

## Changing the sponsors

To change the sponsors, just update the logos in `src/assets/sponsors`. Note that the order they appear on the page is alphabetical by file name, so if a particular order is required the files could be numbered.

### Editing the nav menu

Edit `src/_data/menu.json`. Note that links can be relative (e.g. `/talks` points to `uqmss.org/talks`) or absolute (e.g. `https://mssuq.getqpay.com`). If linking to another page on the MSS website the link should be relative.

## Development

### Running Locally

 1. Install `yarn`
 2. Run `git clone`
 3. Navigate into `msswesbite`
 4. Run `yarn`
 5. Run `yarn serve`
 6. Navigate to `localhost:8080` and the website should be displayed!


### Editing the styles

You should not need to edit the CSS. All of the styling is done using [tailwind](https://tailwindcss.com/docs), and styles are added using the corresponding class names.

<!-- TODO: more details around customising tailwind, example class names etc -->


## Deployment

The project is deployed to *github pages* using *github actions*. This should run automatically when a new commit is pushed to `master`. To check the status of an action go to the actions tab (the logs here should detail where it got stuck).
