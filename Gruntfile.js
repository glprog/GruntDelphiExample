const path = require('path');

module.exports = function(grunt) {
    const caminho = path.join(__dirname, 'unittest');
    const caminhoBat = path.join(caminho, 'test.bat');
    const app_name = 'project1';    
    grunt.initConfig({
      commands: {
        test: {
          force: false,          
          cmd: [
            `cd "${caminho}"`,
            `test.bat`            
          ]
        }
      },
      bgShell: {
        test: {
          cmd: `${caminhoBat} "${caminho}" "${app_name}"`,
          execOptions: caminho,
          execOpts: {
            stdio: 'inherit'
          }
        },        
        stdout: true
      },
      watch: {
        test: {
          files: ['**/*.pas', '**/*.dpr', '**/*.dproj'],
          tasks: ['bgShell:test']
        }
      }
    });
      
    grunt.loadNpmTasks('grunt-bg-shell');
    grunt.loadNpmTasks('grunt-contrib-watch');
  
    grunt.registerTask('default', ['watch:test']);
  
  };