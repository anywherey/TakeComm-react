import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // base:'/',
  // publicDir:'public',
   resolve:{
     alias:{
       '@':path.resolve(__dirname,'src')
     }
   },
  // build:{
  //   outDir:'/takeout-h5',
  //  lib:{
  //   entry:path.resolve(__dirname,'src/main.tsx'),
  //   name:'takeout',
  //   fileName:'take-out'
  //  },
  //  rollupOptions:{
  //   external:['vue']
  //  }
  // },
  server:{
    port:3001,
    proxy:{
    }
  },
  // css:{
  //   preprocessorOptions: {
  //     less:{
  //       additionalData: `@import "${path.resolve(__dirname, 'src/assets/style/init.less')}";`,
  //       rewriteUrls: 'all',
  //       javascriptEnabled: true,
  //     }
  //   }
  // }
})
