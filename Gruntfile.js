module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            main: {
                src: 'js/<%= pkg.name %>.js',
                dest: 'js/<%= pkg.name %>.min.js'
            }
        },
        // less: {
        //     expanded: {
        //         options: {
        //             paths: ["css"]
        //         },
        //         files: {
        //             "css/<%= pkg.name %>.css": "less/<%= pkg.name %>.less"
        //         }
        //     },
        //     minified: {
        //         options: {
        //             paths: ["css"],
        //             cleancss: true
        //         },
        //         files: {
        //             "css/<%= pkg.name %>.min.css": "less/<%= pkg.name %>.less"
        //         }
        //     }
        // },
        sass: {
            full: {
                expand: true,
                cwd: 'sass',
                src: ['**/*.scss'],
                dest: 'css',
                ext: '.css',
                options: {
                    style: 'expanded',
                    sourcemap: 'none'
                }
            },
            minified: {
                expand: true,
                cwd: 'sass',
                src: ['**/*.scss'],
                dest: 'css',
                ext: '.min.css',
                options: {
                    style: 'compressed'
                }
            }
        },
        banner: '/*!\n' +
            ' * <%= pkg.title %> v<%= pkg.version %> (<%= pkg.homepage %>)\n' +
            ' * Copyright <%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
            ' * Licensed under <%= pkg.license %>\n' +
            ' */\n',
        usebanner: {
            dist: {
                options: {
                    position: 'top',
                    banner: '<%= banner %>'
                },
                files: {
                    src: ['css/<%= pkg.name %>.css', 'css/<%= pkg.name %>.min.css', 'js/<%= pkg.name %>.min.js']
                }
            }
        },
        watch: {
            scripts: {
                files: ['js/<%= pkg.name %>.js'],
                tasks: ['uglify'],
                options: {
                    spawn: false,
                    livereload: true
                },
            },
            sass: {
                files: ['sass/**/*.scss'],
                tasks: ['sass', 'postcss'],
                options: {
                    spawn: false,
                    livereload: true
                }
            },
            grunt: {
                files: ['./Gruntfile.js', 'config/*.js'],
                options: {
                    reload: true
                }
            }
        },
        postcss: {
            options: {
                processors: [
                    require('autoprefixer')({browsers: ['last 2 version']})
                ]
            },
            full: {
                src: 'css/ronin.css'
            },
            minified: {
                src: 'css/ronin.min.css',
                map: true
            }
        }
    });

    // Register Tasks
    grunt.registerTask('build', ['uglify', 'sass', 'postcss', 'usebanner']);
    grunt.registerTask('default', ['build', 'watch']);
};