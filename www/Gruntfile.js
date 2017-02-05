module.exports = function (grunt) {

    grunt.initConfig({
        watch: {
            templates: {
                files: ['jade/*.jade', 'jade/*.pug'],
                tasks: ['pug'],
                options: {
                    spawn: false
                }
            },
            styles: {
                files: ['sass/*.scss'],
                tasks: ['sass'],
                options: {
                    spawn: false
                }
            },
            scripts: {
                files: ['js/*.js'],
                tasks: ['uglify'],
                options: {
                    spawn: false
                }
            }
        },
        cssmin: {
            options: {
                shorthandCompacting: false,
                roundingPrecision: -1
            },
            target: {
                files: {
                    'styles/main_global.min.css': ['styles/main_global.css']
                }
            }
        },
        uglify: {
            my_target: {
                files: {
                    'js/all.m.js': [
                        'js/jquery1.10.js',
                        'js/jquery-ui-1.11.4.js',
                        'js/jquery.validationEngine.js',
                        'js/jquery.validationEngine-ru.js',
                        'js/backstretch.js',
                        'js/slick.js',
                        'js/jquery.inputmask.bundle.js',
                        'vendor/fancyBox-master/dist/jquery.fancybox.min.js',
                        'js/script.js'
                    ],
                    'js/index.m.js': [
                        'js/index.js'
                    ],
                    'js/script.m.js': [
                        'js/script.js'
                    ]
                }
            }

            // my_target: {
            //     files: {
            //         'js/all.m.js': [
            //             'js/jquery1.10.js',
            //             'js/jquery-ui-1.11.4.js',
            //             'js/jquery.validationEngine.js',
            //             'js/jquery.validationEngine-ru.js'
            //         ],
            //         'js/index.m.js': [
            //             'js/index.js'
            //         ],
            //         'js/script.m.js': [
            //             'js/script.js'
            //         ]
            //     }
            // }
        },
        sass: {
            dist: {
                options: {
                    sourcemap: 'none',
                    style: 'compressed'
                },
                files: {
                    'styles/styles.css': 'sass/styles.scss',
                    'styles/main_global.css': 'sass/main_global.scss'
                }
            }
        },
        pug: {
            release: {
                options: {
                    data: {
                        client: true,
                        debug: false,
                        pretty: false
                    }
                },
                files: [{
                    cwd: "jade/",
                    src: "*.jade",
                    dest: "",
                    expand: true,
                    ext: ".html"
                }]
            }
        },
        jade: {
            compile: {
                options: {
                    client: false,
                    pretty: false
                },
                files: [{
                    cwd: "jade/",
                    src: "*.jade",
                    dest: "",
                    expand: true,
                    ext: ".html"
                }]
            }
        }
    });

    require('load-grunt-tasks')(grunt);

    grunt.registerTask('default', ['watch']);
};