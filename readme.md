# Monorepo Setup Guide

This monorepo contains multiple projects that can be run independently using `pnpm`. Follow the instructions below to set up and run the projects.

## Prerequisites
- Install [pnpm](https://pnpm.io/installation)
- Ensure Node.js is installed

## Running the Projects

To run the projects, follow these steps:

1. Open a command prompt in the root folder of the monorepo.
2. Start `project2` by running:
   ```sh
   pnpm --filter project2 dev
   ```
3. Start `project1` by running:
   ```sh
   pnpm --filter project1 dev
   ```

### Project URLs
- `project1` will run at: [http://localhost:5174/](http://localhost:5174/)

Both projects will be running simultaneously in your local development environment.

## Additional Notes
- Modify the `package.json` in each project to adjust scripts or dependencies as needed.
- Ensure proper workspace configurations in `pnpm-workspace.yaml` if new projects are added.
- Restart both projects if you encounter any issues.

For any troubleshooting, refer to the pnpm documentation or check the logs for errors.

