# MEN Stack with OAuth Template

This is a MEN Stack template that includes OAuth.

Use this to go build things! 🚀

## To Use This Template

__Replace `<name-of-your-app-here>` (including the `<` and `>`) in the commands below with the name of your app!__

```bash
git clone https://github.com/SEI-Remote/men-stack-oauth-template.git <name-of-your-app-here>
cd <name-of-your-app-here>
```

Once you are in the project directory:

```bash
rm -rf .git
```

Here's what your command line output should like after this step (note that the indicator that we are in a git repository is gone!)

<img src="https://i.imgur.com/L47kNOZ.png" alt="The command line before and after running the rm -rf .git command. Before git:(main) is visible indiating that the directory contains a git repository, after the command it is not.">

Re-initialize a git repository:

```bash
git init
```

Create a repo for this project on GitHub and add that remote to your project with `git remote add origin Your-repo-URL-here`.

Run npm i to fetch the template's dependencies:

```bash
npm i
```

touch a .env file:

```bash
touch .env
```

Fill it with the following:

```
DATABASE_URL=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
GOOGLE_CLIENT_ID=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
GOOGLE_SECRET=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
SESSION_SECRET=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

Replace the `DATABASE_URL`, `GOOGLE_CLIENT_ID`, `GOOGLE_SECRET`, and `SESSION_SECRET` with values that you provide.

Delete this `README.md` file and finally, make an initial commit:

```bash
git add .
git commit -m "initial commit"
git push origin main
```

You're done!
