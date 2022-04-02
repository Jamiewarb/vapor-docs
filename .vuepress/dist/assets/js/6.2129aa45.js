(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{398:function(a,t,e){a.exports=e.p+"assets/img/jumpbox-db-connection-settings.b12d28b8.png"},416:function(a,t,e){"use strict";e.r(t);var s=e(56),r=Object(s.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"databases"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#databases"}},[a._v("#")]),a._v(" Databases")]),a._v(" "),s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#introduction"}},[a._v("Introduction")])]),s("li",[s("a",{attrs:{href:"#creating-databases"}},[a._v("Creating Databases")]),s("ul",[s("li",[s("a",{attrs:{href:"#the-default-database"}},[a._v("The Default Database")])]),s("li",[s("a",{attrs:{href:"#database-types"}},[a._v("Database Types")])]),s("li",[s("a",{attrs:{href:"#quick-development-databases"}},[a._v("Quick Development Databases")])])])]),s("li",[s("a",{attrs:{href:"#using-databases"}},[a._v("Using Databases")]),s("ul",[s("li",[s("a",{attrs:{href:"#connecting-to-private-databases-locally"}},[a._v("Connecting To Private Databases Locally")])])])]),s("li",[s("a",{attrs:{href:"#database-proxies"}},[a._v("Database Proxies")])]),s("li",[s("a",{attrs:{href:"#database-users"}},[a._v("Database Users")])]),s("li",[s("a",{attrs:{href:"#scaling-databases"}},[a._v("Scaling Databases")])]),s("li",[s("a",{attrs:{href:"#restoring-databases"}},[a._v("Restoring Databases")])]),s("li",[s("a",{attrs:{href:"#upgrading-databases"}},[a._v("Upgrading Databases")])]),s("li",[s("a",{attrs:{href:"#metrics"}},[a._v("Metrics")]),s("ul",[s("li",[s("a",{attrs:{href:"#alarms"}},[a._v("Alarms")])])])]),s("li",[s("a",{attrs:{href:"#deleting-databases"}},[a._v("Deleting Databases")])])])]),s("p"),a._v(" "),s("h2",{attrs:{id:"introduction"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#introduction"}},[a._v("#")]),a._v(" Introduction")]),a._v(" "),s("p",[a._v("Vapor allows you to easily create and manage RDS and Aurora Serverless databases directly from the Vapor UI or using the Vapor CLI. "),s("strong",[a._v("Database backups are automatically performed and you may restore a database to any point in time (down to the second) within the backup retention window.")])]),a._v(" "),s("h2",{attrs:{id:"creating-databases"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#creating-databases"}},[a._v("#")]),a._v(" Creating Databases")]),a._v(" "),s("p",[a._v("You may create databases using the Vapor UI or using the "),s("code",[a._v("database")]),a._v(" CLI command. When using the CLI command, the command will prompt you for more details about the database such as its desired performance class and maximum storage space.")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("vapor database my-application-db\n")])])]),s("h3",{attrs:{id:"the-default-database"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#the-default-database"}},[a._v("#")]),a._v(" The Default Database")]),a._v(" "),s("p",[a._v('Vapor will automatically create a "vapor" database within each database instance that you create. You are free to create additional databases using the database management tool of your choice.')]),a._v(" "),s("h3",{attrs:{id:"database-types"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#database-types"}},[a._v("#")]),a._v(" Database Types")]),a._v(" "),s("p",[a._v("When creating Vapor databases, you may choose from two different types of databases: fixed size and auto-scaling serverless databases.")]),a._v(" "),s("h4",{attrs:{id:"fixed-size-databases"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fixed-size-databases"}},[a._v("#")]),a._v(" Fixed Size Databases")]),a._v(" "),s("p",[a._v("Fixed sized databases are RDS MySQL 5.7 / RDS MySQL 8 / Postgres 10 / Postgres 11 / Postgres 13 databases that have a fixed amount of RAM and disk space. These databases may be scaled up or down after creation, but not without incurring downtime.")]),a._v(" "),s("p",[a._v("In addition, these databases may be publicly accessible (with a long, random password automatically assigned by Vapor) or private. Private databases may not typically be accessed from the public Internet. To access them from your local machine, you will need to create a Vapor jumpbox.")]),a._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[a._v("Private Databases")]),a._v(" "),s("p",[a._v("Vapor will place any application that uses a private database in a network with a "),s("RouterLink",{attrs:{to:"/1.0/resources/networks.html#nat-gateways"}},[a._v("NAT Gateway")]),a._v(". Later, if you no longer plan to use the database and are using no other private resources from your application, you may remove the NAT Gateway from your network via the network's management screen.")],1)]),a._v(" "),s("h4",{attrs:{id:"serverless-databases"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#serverless-databases"}},[a._v("#")]),a._v(" Serverless Databases")]),a._v(" "),s("p",[a._v("Serverless databases are auto-scaling Aurora MySQL 5.7 / Postgres 10 databases which do not have a fixed amount of RAM or disk space. Instead, these databases automatically scale based on the needs of your application. At their smallest scale, they are allocated 1GB of RAM.")]),a._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[a._v("Serverless Databases")]),a._v(" "),s("p",[a._v("AWS requires all serverless databases to be private, meaning Vapor will place any application that uses them in a network with a "),s("RouterLink",{attrs:{to:"/1.0/resources/networks.html#nat-gateways"}},[a._v("NAT Gateway")]),a._v(". If you no longer plan to use a serverless database and are using no other private resources from your application, you may remove the NAT Gateway from your network via the network's management screen.")],1)]),a._v(" "),s("h3",{attrs:{id:"quick-development-databases"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#quick-development-databases"}},[a._v("#")]),a._v(" Quick Development Databases")]),a._v(" "),s("p",[a._v("To quickly create a publicly accessible database of the smallest performance class, you may use the "),s("code",[a._v("--dev")]),a._v(" flag when creating your database. These small, affordable databases are perfect for testing or staging environments:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("vapor database my-test-database --dev\n")])])]),s("h2",{attrs:{id:"using-databases"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#using-databases"}},[a._v("#")]),a._v(" Using Databases")]),a._v(" "),s("p",[a._v("To attach a database to an environment, add a "),s("code",[a._v("database")]),a._v(" key to the environment's configuration in your "),s("code",[a._v("vapor.yml")]),a._v(" file and deploy your application. The value of this key should be the name of the database. "),s("strong",[a._v("When the environment is deployed, Vapor will automatically inject the necessary Laravel environment variables for connecting to the database, allowing your application to start using it immediately:")])]),a._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("3")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" vapor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("app\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("environments")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("production")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("database")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" my"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("application"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("db\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("build")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'composer install --no-dev'")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("deploy")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'php artisan migrate --force'")]),a._v("\n")])])]),s("h3",{attrs:{id:"connecting-to-private-databases-locally"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#connecting-to-private-databases-locally"}},[a._v("#")]),a._v(" Connecting To Private Databases Locally")]),a._v(" "),s("p",[a._v("If you would like to connect to your private database from your local machine, you can either use a Vapor "),s("RouterLink",{attrs:{to:"/1.0/resources/networks.html#jumpboxes"}},[a._v("jumpbox")]),a._v(" in combination with a GUI database management tool or the "),s("code",[a._v("database:shell")]),a._v(" CLI command. Jumpboxes are very small, SSH accessible servers that are placed within your private network.")],1),a._v(" "),s("h4",{attrs:{id:"jumpboxes-gui-tool"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jumpboxes-gui-tool"}},[a._v("#")]),a._v(" Jumpboxes + GUI Tool")]),a._v(" "),s("p",[a._v("Once a jumpbox has been created, you may configure your database management tool to connect to your database through the jumpbox SSH connection:")]),a._v(" "),s("p",[s("img",{attrs:{src:e(398),alt:"Database GUI Connection Settings"}})]),a._v(" "),s("h4",{attrs:{id:"shell-command"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#shell-command"}},[a._v("#")]),a._v(" Shell Command")]),a._v(" "),s("p",[a._v("After provisioning a jumpbox, you may use the "),s("code",[a._v("database:shell")]),a._v(" command to quickly access a command line database shell that lets you interact with your database:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("vapor database:shell my-application-db\n")])])]),s("h2",{attrs:{id:"database-proxies"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#database-proxies"}},[a._v("#")]),a._v(" Database Proxies")]),a._v(" "),s("p",[a._v("Even though your serverless Laravel applications running on Vapor can handle extreme amounts of web traffic, traditional relational databases such as MySQL can become overwhelmed and crash due to connection limit restrictions. To solve this, you may use an RDS proxy to efficiently manage your database connections and allow many more connections than would typically be possible.")]),a._v(" "),s("p",[a._v("The database proxy can be added via the Vapor UI or the "),s("code",[a._v("database:proxy")]),a._v(" CLI command:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("vapor database:proxy my-application-db\n")])])]),s("p",[a._v("Next, you may instruct an environment to use the proxy associated with the database using the "),s("code",[a._v("database-proxy")]),a._v(" configuration option within your "),s("code",[a._v("vapor.yml")]),a._v(" file:")]),a._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("3")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" vapor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("app\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("environments")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("production")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("database")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" my"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("application"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("db\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("database-proxy")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[a._v("true")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("build")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'composer install --no-dev'")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("deploy")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'php artisan migrate --force'")]),a._v("\n")])])]),s("p",[a._v("You can delete the proxy at any time using the Vapor UI or the "),s("code",[a._v("database:delete-proxy")]),a._v(" CLI command. Before deleting a proxy, make sure none of your applications are using the associated proxy:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("vapor database:delete-proxy my-application-db\n")])])]),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[a._v("Limitations")]),a._v(" "),s("p",[a._v("Before considering the usage of database proxies in Vapor, please consult Amazon's "),s("a",{attrs:{href:"https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/rds-proxy.html#rds-proxy.limitations",target:"_blank",rel:"noopener noreferrer"}},[a._v("list of limitations"),s("OutboundLink")],1),a._v(".")])]),a._v(" "),s("h2",{attrs:{id:"database-users"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#database-users"}},[a._v("#")]),a._v(" Database Users")]),a._v(" "),s("p",[a._v('When a database is created, Vapor creates a "vapor" master user. You may create additional database users, which will automatically be assigned a secure, random password, using the Vapor UI or the '),s("code",[a._v("database:user")]),a._v(" CLI command:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("vapor database:user my-application-db user-2\n")])])]),s("p",[a._v("You may instruct an environment to connect to a database as a given user using the "),s("code",[a._v("database-user")]),a._v(" configuration option within your "),s("code",[a._v("vapor.yml")]),a._v(" file:")]),a._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("id")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("3")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" vapor"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("app\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("environments")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("production")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("database")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" my"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("application"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v("db\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("database-user")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" user"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("build")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'composer install --no-dev'")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[a._v("deploy")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("-")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'php artisan migrate --force'")]),a._v("\n")])])]),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[a._v("Database Password Rotation")]),a._v(" "),s("p",[a._v('You may leverage users to "rotate" the password of a database without downtime by creating a new user, updating the environment to use that user, deploying the environment, and then deleting the old database user.')])]),a._v(" "),s("h2",{attrs:{id:"scaling-databases"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#scaling-databases"}},[a._v("#")]),a._v(" Scaling Databases")]),a._v(" "),s("p",[a._v("You may scale fixed size databases via the Vapor UI's database detail screen or the "),s("code",[a._v("database:scale")]),a._v(" CLI command. When scaling a fixed size database, the database will be unavailable, and the amount of time it takes to scale the database could vary based on the size of the database. Therefore, you should place your application in maintenance mode before beginning the scaling operation:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("vapor database:scale my-application-db\n")])])]),s("h2",{attrs:{id:"restoring-databases"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#restoring-databases"}},[a._v("#")]),a._v(" Restoring Databases")]),a._v(" "),s("p",[a._v("Vapor database backups are performed automatically and you may restore databases to any point in time within the database backup retention period, which is three days by default. You can change the database backup retention period at any time via the Vapor UI's database details screen.")]),a._v(" "),s("p",[a._v("Database restoration may be initiated via the Vapor UI or the "),s("code",[a._v("database:restore")]),a._v(" CLI command:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("vapor database:restore current-database-name new-database-name\n")])])]),s("p",[a._v("When restoring a database, a new database is created with the same configuration as the previous database. Then, the previous database's contents are restored to the new database as they existed at the exact point in time you choose. To attach the restored database to an environment, update the value of the "),s("code",[a._v("database")]),a._v(" key in your "),s("code",[a._v("vapor.yml")]),a._v(" file and deploy the environment.")]),a._v(" "),s("p",[a._v("Once you are satisfied with the database restoration, you may delete the old database.")]),a._v(" "),s("h2",{attrs:{id:"upgrading-databases"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#upgrading-databases"}},[a._v("#")]),a._v(" Upgrading Databases")]),a._v(" "),s("p",[a._v("You may upgrade a Vapor managed MySQL database via the Vapor UI or the "),s("code",[a._v("database:upgrade")]),a._v(" CLI command. When upgrading a database, a new database is created with the same configuration and credentials as the original database:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("vapor database:upgrade current-database-name new-database-name\n")])])]),s("p",[a._v("Keep in mind that major version upgrades can contain database changes that are not backward-compatible with existing applications. For that reason, we recommend that you thoroughly test the new upgraded database version before attaching it to a production environment. The original database will not be affected by this operation at any point.")]),a._v(" "),s("p",[a._v("Upgrading a database can take several hours for large databases. Therefore, if you plan to attach the new database to a production environment, you may want to place any affected environments in maintenance mode first. Once the newly upgraded database is available, you may start using it by attaching it to an environment.")]),a._v(" "),s("p",[a._v("Of course, once you are satisfied with the database upgrade, you may delete the original database.")]),a._v(" "),s("h2",{attrs:{id:"metrics"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#metrics"}},[a._v("#")]),a._v(" Metrics")]),a._v(" "),s("p",[a._v("A variety of database performance metrics are available via the Vapor UI's database detail screen or using the "),s("code",[a._v("database:metrics")]),a._v(" CLI command:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("vapor database:metrics my-application-db\nvapor database:metrics my-application-db 5m\nvapor database:metrics my-application-db 30m\nvapor database:metrics my-application-db 1h\nvapor database:metrics my-application-db 8h\nvapor database:metrics my-application-db 1d\nvapor database:metrics my-application-db 3d\nvapor database:metrics my-application-db 7d\nvapor database:metrics my-application-db 1M\n")])])]),s("h3",{attrs:{id:"alarms"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#alarms"}},[a._v("#")]),a._v(" Alarms")]),a._v(" "),s("p",[a._v("You may configure alarms for all database metrics using the Vapor UI. These alarms will notify you via the notification method of your choice when an alarm's configured threshold is broken and when an alarm recovers.")]),a._v(" "),s("h2",{attrs:{id:"deleting-databases"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#deleting-databases"}},[a._v("#")]),a._v(" Deleting Databases")]),a._v(" "),s("p",[a._v("Databases may be deleted via the Vapor UI or using the "),s("code",[a._v("database:delete")]),a._v(" CLI command. Once a database has been deleted, it can not be recovered, so take extra caution before deleting a database:")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("vapor database:delete my-application-db\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);