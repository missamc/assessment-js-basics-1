/*
    For this section of the assessment you will be putting together a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/

//CODE HERE

let gitDefinition = 'Git is a version control system that is used for tracking code changes, tracking who makes changes, and for coding collaboration. It performs many tasks such as managing projects with repositories, cloning a project to work on a local copy, tracking and controling changes with staging and committing, branching and merging to allow for work on different parts and versions of a project, pulling the latest version of a project to a local copy, as well as pushing local updates to the main project. It is used by over 70% of developers, enabling them to work together from anywhere around the world, enabling them to see the full history of a project, and allowing them to revert to earlier versions of a project.'

//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what GitHub is.
*/
//CODE HERE

let gitHubDefinition = 'GitHub is not the same as Git. Rather, it makes tools that use Git, and is the largest host of source code around the world. It is an online software development platform thats used for storing, tracking, as well as collaborating on software projects. It helps make it easy for developers to share code and collaborate with fellow developers on open-source projects, and also serves as a social networking site where developers are able to openly collaborate, network, and pitch their work.'



//////////////////PROBLEM 3////////////////////
/*
    Create a variable called 'gitInitDefinition'.  
    It should be a string containing your best definition of what 'git init' does.
*/

//CODE HERE

let gitInitDefinition = ' "git init"- Initialize a local repository right here in this folder; this command creates a new Git repository that can be used to convert an exisiting, unversioned project to a Git repository or initialize a new empty repository. Since most other Git commands are not available outside of an initialized repository, this is usually the first command you will run in a new project.'



//////////////////PROBLEM 4////////////////////
/*
    Create a variable called 'gitCloneDefinition'.  
    It should be a string containing your best definition of what 'git clone' does.
*/

//CODE HERE

let gitCloneDefinition = ' "git clone"-This is primarily used to point to an existing repository, and make a copy or clone of that repository at in a new directory, at another location. The original repository is able to be located on the local file system or on remote machine accessible supported protocols. The git clone command copies an exisiting Git repository.'

//////////////////PROBLEM 5////////////////////
/*
    Create a variable called 'gitStatusDefinition'.  
    It should be a string containing your best definition of what 'git status' does.
*/

//CODE HERE

let gitStatusDefinition = '"git status"-This command displays the status of the working directory and the staging area, and lets you see which changes have been staged, which havent, as well as which files arent being tracked by Git'


//////////////////PROBLEM 6////////////////////
/*
    Create a variable called 'gitAddDefinition'.  
    It should be a string containing your best definition of what 'git add' does.

    Create another variable called 'gitAddCode'.  
    It should be a string containing the code to add all files.
*/

//CODE HERE


let gitAddDefinition  = '"git add ."- This command adds a change in the working directory to the staging area. It tells Git that you want to include updates to a particular file in the next commit. However, it does not really affect the repository in any way significantly-changes are not actually recorded until you run git commit.'

let gitAddCode = 'git add --all'

//////////////////PROBLEM 7////////////////////
/*
    Create a variable called 'gitCommitDefinition'.  
    It should be a string containing your best definition of what 'git commit' does.

    Create a variable called 'gitCommitCode'.  
    It should be a string containing the code to commit using the message "initial commit".
*/

//CODE HERE


let gitCommitDefinition = '"git commit -m 'commit message'"-This command captures a snapshot of the projects currently staged changes. Committed snapshots can be thought of as "safe" versions of a project. Git will never change them unless you specifically ask it to.'

let gitCommitCode = '"git init"-The intiial commit is the first commit someone made. Git wont let you commit an empty repository, so theres no other option. Something must be commit'

//////////////////PROBLEM 8////////////////////
/*
    Create a variable called 'gitPushDefinition'.  
    It should be a string containing your best definition of what 'git push' does.
*/

//CODE HERE

let gitPushDefinition = '"git push"-This command is used to upload local repository content to a remote repository. Pushing is how you transfer commits from your local repository to a remote repo.'