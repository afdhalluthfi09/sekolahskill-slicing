import {defineConfig} from 'vite'
export default defineConfig({
    build:{
        rollupOptions:{
            input:{
                index:'index.html',
                detailModul:'detail_modul.html',
                detailProductGuru:'detailproduct_guru.html',
                detailProduct:'detailproduct.html',
                kelasEvent:'kelasevent.html',
                login:'login.html',
                register:'register.html'
            }
        }
    }
 })