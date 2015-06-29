module.exports = function(grunt) {
    grunt.initConfig({
        // copies fonts and bootstrap scss
        // copy: {
        //     main: {
        //         files: [
        //             {expand: true, src: ['bower_components/fontawesome/fonts/*'], dest: 'Build/assets/fonts/', filter: 'isFile', flatten: true},
        //             {expand: true, src: ['bower_components/bootstrap-sass-official/assets/fonts/bootstrap/*'], dest: 'Build/assets/fonts/bootstrap', filter: 'isFile', flatten: true},
        //
        //             {expand: true, src: ['bower_components/modernizr/modernizr.js'], dest: 'Build/assets/js/vendor/', filter: 'isFile', flatten: true},
        //             {expand: true, src: ['bower_components/jquery/dist/jquery.min.js'], dest: 'Build/assets/js/vendor/', filter: 'isFile', flatten: true}
        //         ],
        //     },
        // },

        // compiles sass to minified css
        sass: {
            dev: {
                options: {
                    style: 'compressed'
                },
                files: {
                    'Build/assets/css/main.min.css': 'assets/css/main.scss'
                }
            },
            // dist: {
            //     options: {
            //         style: 'compressed'
            //     },
            //     files: {
            //         'Build/assets/css/app.min_1.css': 'Build/assets/css/app_1.css',
            //         'Build/assets/css/app.min_2.css': 'Build/assets/css/app_2.css'
            //     }
            // }
        },

        // concatenates js files to single file
        concat: {
            dist: {
                src: [
                    'bower_components/jquery/dist/jquery.js',
                    'bower_components/bootstrap-sass/assets/javascripts/bootstrap.js',
                    'bower_components/bootstrap-datepicker/dist/js/bootstrap-datepicker.js',
                    'bower_components/moment/moment.js',
                    'bower_components/underscore/underscore.js',
                    'bower_components/clndr/clndr.min.js',
                    'bower_components/bootstrap-dialog/dist/js/bootstrap-dialog.min.js',
                    'bower_components/jquery.scrollTo/jquery.scrollTo.min.js',
                    'bower_components/owlcarousel/owl-carousel/owl.carousel.js',
                    'assets/js/*.js'
                ],
                dest: 'Build/assets/js/main.js'
            }
        },

        // creates minified js
        uglify: {
            dist: {
                files: {
                    'Build/assets/js/main.min.js': 'Build/assets/js/main.js'
                }
            }
        },

        // compiles html files
        mustatic: {
            options: {
                src: 'includes',
                dest: 'Build'
            },
            dist: {
                globals: {
                    lang: 'en',
                    charset: 'utf-8'
                }
            }
        },

        // watches changes and compiles automatically
        watch: {
            options: {
                livereload: true,
            },
            sass: {
                files: ['assets/css/{,*/}*.scss', 'assets/css/custom/{,*/}*.scss'],
                // tasks: ['sass:dev', 'sakugawa', 'sass:dist']
                tasks: ['sass:dev']
            },
            concat: {
                files: ['assets/js/{,*/}*.js'],
                tasks: ['concat', 'uglify']
            },
            mustatic: {
                files: ['includes/{,*/}*.html', 'includes/{,*/}*.json', 'includes/partials/{,*/}*.html', 'includes/pages/{,*/}*.html'],
                tasks: ['mustatic']
            },
            configFiles: {
                files: [ 'gruntfile.js' ],
                options: {
                    reload: true
                }
            }
        },

        // keeps livereload on browser
        connect: {
            options: {
        		port: 9001,
        		livereload: 35729,
        		// Change this to '0.0.0.0' or '*' to access the server from outside
        		hostname: 'localhost'
        		// hostname: '0.0.0.0'
        		// hostname: '*'
        	},

        	livereload: {
        		options: {
        			open: true,
        			base: ['Build']
        		}
        	}
        }

    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-sakugawa');
    grunt.loadNpmTasks('dbushell-grunt-mustatic');

    grunt.registerTask('default', ['init']);
    // grunt.registerTask('scss', ['sass:dev', 'sakugawa', 'sass:dist']);
    grunt.registerTask('js', ['concat', 'uglify']);
    grunt.registerTask('serve', ['connect', 'watch']);
    // grunt.registerTask('init', ['copy', 'scss', 'js', 'mustatic', 'serve']);
    grunt.registerTask('init', ['sass', 'js', 'mustatic', 'serve']);
    // grunt.registerTask('update', ['copy', 'scss', 'js', 'mustatic']);

};
