import { Component } from '@angular/core';
import { ScrollAnimation } from '../../core/directives/scroll-animation';

@Component({
    selector: 'app-skills',
    imports: [ScrollAnimation],
    templateUrl: './skills.html',
    styleUrl: './skills.css',
})
export class Skills {
    technologies = [
        { name: "Angular", icon: "img/svg/technologies/angular.svg" },
        { name: "React", icon: "img/svg/technologies/react.svg" },
        { name: "NodeJS", icon: "img/svg/technologies/node.svg" },
        { name: "Express", icon: "img/svg/technologies/express.svg" },
        { name: "NextJS", icon: "img/svg/technologies/nextjs.svg" },
        { name: "Vite", icon: "img/svg/technologies/vite.svg" },
        { name: "Flutter", icon: "img/svg/technologies/flutter.svg" },
        { name: "Electron", icon: "img/svg/technologies/electron.svg" },
        
        // { name: "Angular", icon: "img/svg/technologies/angular.svg" },
        // { name: "React", icon: "img/svg/technologies/react.svg" },
        // { name: "NodeJS", icon: "img/svg/technologies/node.svg" },
        // { name: "Express", icon: "img/svg/technologies/express.svg" },
        // { name: "NextJS", icon: "img/svg/technologies/nextjs.svg" },
        // { name: "Vite", icon: "img/svg/technologies/vite.svg" },
        // { name: "Flutter", icon: "img/svg/technologies/flutter.svg" },
        // { name: "Electron", icon: "img/svg/technologies/electron.svg" },
    ]

    languages = [
        { name: "C#", icon: "img/svg/languages/csharp.svg" },
        { name: "Typescript", icon: "img/svg/languages/typescript.svg" },
        { name: "Java", icon: "img/svg/languages/java.svg" },
        { name: "HTML5", icon: "img/svg/languages/html5.svg" },
        { name: "CSS3", icon: "img/svg/languages/css3.svg" },
        { name: "JavaScript", icon: "img/svg/languages/javascript.svg" },
        { name: "Dart", icon: "img/svg/languages/dart.svg" },
        { name: "Scala", icon: "img/svg/languages/scala.svg" },
        { name: "YAML", icon: "img/svg/languages/yaml.svg" },
        { name: "SQL", icon: "img/svg/languages/sql.svg" },
        { name: "C", icon: "img/svg/languages/c.svg" },
        { name: "C++", icon: "img/svg/languages/cpp.svg" },
        { name: "Embedded C", icon: "img/svg/languages/embeddedc.svg" },
    ]

    frameworks = [
        { name: ".NET", icon: "img/svg/frameworks/dotnetcore.svg" },
        { name: ".NET Framework", icon: "img/svg/frameworks/dotnet.svg" },
        { name: "Entity Framework", icon: "img/svg/frameworks/entityframeworkcore.svg" },
        { name: "Less", icon: "img/svg/frameworks/less.svg" },
        { name: "Sass", icon: "img/svg/frameworks/sass.svg" },
        { name: "Tailwind CSS", icon: "img/svg/frameworks/tailwindcss.svg" },
        { name: "DaisyUI", icon: "img/icons/daisyui.webp" },
        { name: "NGRX", icon: "img/svg/frameworks/ngrx.svg" },
        { name: "RXJS", icon: "img/svg/frameworks/rxjs.svg" },
        
        // { name: ".NET", icon: "img/svg/frameworks/dotnetcore.svg" },
        // { name: ".NET Framework", icon: "img/svg/frameworks/dotnet.svg" },
        // { name: "Entity Framework", icon: "img/svg/frameworks/entityframeworkcore.svg" },
        // { name: "Less", icon: "img/svg/frameworks/less.svg" },
        // { name: "Sass", icon: "img/svg/frameworks/sass.svg" },
        // { name: "Tailwind CSS", icon: "img/svg/frameworks/tailwindcss.svg" },
        // { name: "DaisyUI", icon: "img/icons/daisyui.webp" },
        // { name: "NGRX", icon: "img/svg/frameworks/ngrx.svg" },
        // { name: "RXJS", icon: "img/svg/frameworks/rxjs.svg" },
    ]

    IDEs = [
        { name: "Visual Studio", icon: "img/svg/IDEs/visualstudio.svg" },
        { name: "Visual Studio Code", icon: "img/svg/IDEs/vscode.svg" },
        { name: "Eclipse", icon: "img/svg/IDEs/eclipse.svg" },
        { name: "IDEA IntelliJ", icon: "img/svg/IDEs/intellij.svg" },
        { name: "Postman", icon: "img/svg/IDEs/postman.svg" },
        { name: "Figma", icon: "img/svg/IDEs/figma.svg" },
        { name: "Jira", icon: "img/svg/IDEs/jira.svg" },
        { name: "Google Antigravity", icon: "img/svg/IDEs/antigravity.svg" },

        // { name: "Visual Studio", icon: "img/svg/IDEs/visualstudio.svg" },
        // { name: "Visual Studio Code", icon: "img/svg/IDEs/vscode.svg" },
        // { name: "Eclipse", icon: "img/svg/IDEs/eclipse.svg" },
        // { name: "IDEA IntelliJ", icon: "img/svg/IDEs/intellij.svg" },
        // { name: "Postman", icon: "img/svg/IDEs/postman.svg" },
        // { name: "Figma", icon: "img/svg/IDEs/figma.svg" },
        // { name: "Jira", icon: "img/svg/IDEs/jira.svg" },
    ]

    databases = [
        { name: "MS SQL Server", icon: "img/svg/databases/mssqlserver.svg" },
        { name: "MySQL", icon: "img/svg/databases/mysql.svg" },
        { name: "SQLite", icon: "img/svg/databases/sqlite.svg" },
        { name: "PostgreSQL", icon: "img/svg/databases/postgresql.svg" },
        { name: "MongoDB", icon: "img/svg/databases/mongodb.svg" },
        
        // { name: "MS SQL Server", icon: "img/svg/databases/mssqlserver.svg" },
        // { name: "MySQL", icon: "img/svg/databases/mysql.svg" },
        // { name: "SQLite", icon: "img/svg/databases/sqlite.svg" },
        // { name: "PostgreSQL", icon: "img/svg/databases/postgresql.svg" },
        // { name: "MongoDB", icon: "img/svg/databases/mongodb.svg" },
        
        // { name: "MS SQL Server", icon: "img/svg/databases/mssqlserver.svg" },
        // { name: "MySQL", icon: "img/svg/databases/mysql.svg" },
        // { name: "SQLite", icon: "img/svg/databases/sqlite.svg" },
        // { name: "PostgreSQL", icon: "img/svg/databases/postgresql.svg" },
        // { name: "MongoDB", icon: "img/svg/databases/mongodb.svg" },
    ]

    tools = [
        { name: "AWS", icon: "img/svg/tools/aws.svg" },
        { name: "Azure", icon: "img/svg/tools/azure.svg" },
        { name: "Azure DevOps", icon: "img/svg/tools/azuredevops.svg" },
        { name: "Git", icon: "img/svg/tools/git.svg" },
        { name: "GitHub", icon: "img/svg/tools/github.svg" },
        { name: "BitBucket", icon: "img/svg/tools/bitbucket.svg" },
        { name: "Docker", icon: "img/svg/tools/docker.svg" },
        { name: "Kubernetes", icon: "img/svg/tools/kubernetes.svg" },
        { name: "Jenkins", icon: "img/svg/tools/jenkins.svg" },
        { name: "Apache Maven", icon: "img/svg/tools/maven.svg" },
        { name: "Nginx", icon: "img/svg/tools/nginx.svg" },
        { name: "Supabase", icon: "img/svg/tools/supabase.svg" },
        { name: "Firebase", icon: "img/svg/tools/firebase.svg" },
        { name: "Apache Tomcat", icon: "img/svg/tools/tomcat.svg" },
        { name: "TortoiseGit", icon: "img/svg/tools/tortoisegit.svg" },
        { name: "Trello", icon: "img/svg/tools/trello.svg" },
        { name: "Vercel", icon: "img/svg/tools/vercel.svg" },
    ]
}
