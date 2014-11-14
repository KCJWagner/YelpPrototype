/*global module:false*/
module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        // Metadata.
        pkg: grunt.file.readJSON("package.json"),

        banner: "/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - " + 
                "<%= grunt.template.today(\"yyyy-mm-dd\") %>\n" + 
                "<%= pkg.homepage ? \"* \" + pkg.homepage + \"\\n\" : \"\" %>" + 
                "* Copyright (c) <%= grunt.template.today(\"yyyy\") %> <%= pkg.author %>;" + 
                " Licensed <%= pkg.license %> */\n",

        // Task configuration.
        concat: {
            options: {
                banner: "<%= banner %>",
                stripBanners: true
            },
            dist: {
                src: ["src/js/jquery-ui-slider-pips.js"],
                dest: "dist/jquery-ui-slider-pips.js"
            }
        },


        uglify: {
            options: {
                banner: "<%= banner %>"
            },
            dist: {
                src: "<%= concat.dist.dest %>",
                dest: "dist/jquery-ui-slider-pips.min.js"
            }
        },


        jshint: {
            jshintrc: ".jshintrc",
            gruntfile: {
                src: "Gruntfile.js"
            },
            srcfiles: {
                src: ["src/js/*.js"]
            }
        },


        copy: {
            options: {
                banner: "<%= banner %>"
            },
            main: {
                files: [{
                    src: ["src/css/*"],
                    dest: "dist/",
                    filter: "isFile",
                    expand: true,
                    flatten: true
                }]
            }
        }


    });

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks("grunt-contrib-concat");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.loadNpmTasks("grunt-contrib-copy");

    // Default task.
    grunt.registerTask("default", ["jshint", "concat", "uglify", "copy"]);

};
