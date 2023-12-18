import{g as p,h as u,c as m,a as t,t as s,i as a,j as x,v as _,d as h,o as v}from"./entry.cd40a674.js";const S=()=>p("lessons",()=>[{id:1,code1:"",header:"Введение в язык JavaScript для новичков",text:'Язык JavaScript предназначен для выполнения в браузере наряду с HTML и CSS Но, если эти языки предназначены для верстки структуры сайта,         то JavaScript позволяет "оживлять" web-страницы - делать их реагирующими      на действия пользователя или демонстрировать некоторую динамичность (к примеру, смена картинок в блоке или красивые плавно выпадающие менюшки).'},{id:2,header:"Запуск JavaScript",code1:`<!DOCTYPE html>
        <html>
            <head>
                <meta charset="utf-8">
                <title>Это заголовок тайтл</title>
                <script>
                    здесь пишем JavaScript код
                <\/script>
            </head>
            <body>
                Это основное содержимое страницы.
            </body>
        </html>`,text:"JavaScript код пишется прямо на HTML странице внутри тега script. Этот тег можно размещать в любом месте страницы. Смотрите пример:"},{id:3,header:"Первая программа на JavaScript",text:"Давайте напишем нашу первую программу на JavaScript. Вот она:",code1:`<!DOCTYPE html>
        <html>
            <head>
                <meta charset="utf-8">
                <title>Моя первая программа</title>
                <script>
                    alert('Привет, мир!');
                <\/script>
            </head>
            <body>
                моя первая программа
            </body>
        </html>`},{id:4,header:"Разберем код программы",code1:"",text:`Давайте разберем код написанной нами выше программы. Первым понятием, которое вам нужно узнать, являются функции. Функции позволяют выполнять некоторые действия. В нашем примере есть функция alert(), которая выводит текст на экран в виде диалогового окошка.
        Функция состоит из имени (в нашем случае это alert) и круглых скобок, написанных после этого имени. В этих круглых скобках следует писать параметры функции. В нашем случае параметром является текст, который выводится на экран.
        В нашем случае функция имеет один параметр, однако бывают функции, в которые нужно передавать несколько параметров. В этом случае эти параметры пишутся через запятую.`},{id:5,header:"",code1:"",text:""},{id:6,header:"",code1:"",text:""},{id:7,header:"",code1:"",text:""}]),f={class:"w-full mx-auto"},b={class:"text-center font-bold mt-2"},J={class:"p-1 text-center"},y={class:"border bg-blue-50"},g={__name:"[id]",setup(T){const n=u(),c=S();let e;const d=c.value.findIndex(o=>o.id==n.params.id);return d!==-1&&(e=c.value[d]),(o,w)=>{var r,i,l;return v(),m("div",f,[t("h2",b,s((r=a(e))==null?void 0:r.header),1),t("p",J,s((i=a(e))==null?void 0:i.text),1),x(t("pre",y,[h("            "),t("code",null,s((l=a(e))==null?void 0:l.code1),1),h(`
        `)],512),[[_,a(e).code1]])])}}};export{g as default};
