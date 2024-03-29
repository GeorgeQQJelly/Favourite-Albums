//Dependencies
import React from 'react';
import styled from 'styled-components';

// Import components

import Genre from './Genre/Genre';
import Albums from './Albums/Albums';

// Styled components
const StyledHeader = styled.section`
    position: sticky;
    top: 0%;
    padding: 0.5em;
    display: flex;
    justify-content: center;
    background-color: black;
    color: white;

    a {
        text-decoration: none;
        color: ${props => props.color || "white"};
    }
`;
const Section = styled.section`  
    background: ${props => props.backgroundColor || "blue"};
    color: ${props => props.textColor || "white"};
    h3 {
        color: ${props => props.artistColor || "blue"}
    }
    padding-bottom: 3em;
    padding-top: 3em;
    width: 100%;
    
    div {
        display: flex;
        justify-content: center;
    }
`;
const Container = styled.section`
    display: flex;
    justify-content: space-around;
    align-items: space-around;
`
const ImageContainer = styled.div`
    display: flex;

    img {
    margin-top: 1em;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    max-width: 50vw;
    }
`

class Main extends React.Component {

    constructor() {
        super();
        
        this.state = {
            albumValues: [
                // Random (0-1)
                [
                    {
                        id:1, 
                        albumSrc:"https://f4.bcbits.com/img/a4253468204_10.jpg", 
                        albumName:"Nypmh Tones", 
                        color: "#77ff00", 
                        albumArtist: "Galen Tiptop", 
                        albumDesc:"Sound-collage, electronic, brain happiness"
                    },
                    {
                        id:2, 
                        albumSrc:"https://m.media-amazon.com/images/I/71zmIZ68XIL._AC_SL1000_.jpg", 
                        albumName:"The Divine Move", 
                        color: "#77ff00", 
                        albumArtist: "Vampilia", 
                        albumDesc:"Post-Rock, Avant-Garde Metal, Black Metal, Bitmapcore"
                    },
                    {
                        id:3, 
                        albumSrc:"https://e.snmc.io/i/600/w/64f719f4361cab0ce9754b61343480ac/7551498/raveena-lucid-Cover-Art.jpg", 
                        albumName:"Lucid", 
                        color: "#a6ffa9", 
                        color: "#77ff00", 
                        albumArtist: "Raveena", 
                        albumDesc:"R&B, Neo-soul, Pop"
                    },
                    {
                        id:4, 
                        albumSrc:"https://upload.wikimedia.org/wikipedia/en/8/82/Bill_Evans_Trio_Portraits_in_Jazz.jpg", 
                        albumName:"Portrait in Jazz", 
                        color: "#77ff00",
                        albumArtist: "Bill Evans", 
                        albumDesc:"Best jazz, I don't know if it's of all time."
                    },
                    {
                        id:5, 
                        albumSrc:"https://f4.bcbits.com/img/a3956726341_5.jpg", 
                        albumName:"nightlife", 
                        color: "#77ff00", 
                        albumArtist: "yuragi", 
                        albumDesc:"Shoegaze, Dream Pop, Alternative Rock"
                    },
                    {
                        id:6, 
                        albumSrc:"https://e.snmc.io/i/600/s/38f9a70c4e2dfb6947deedfe944307cd/7725355/phum-viphurit-bangkok-balter-club-Cover-Art.jpg", 
                        albumName:"Bangkok Balter Club", 
                        color: "#77ff00", 
                        albumArtist: "Phum Viphurit", 
                        albumDesc:"Pop, awesomeness, indie, rock????, happiness feelings"
                    },
                ],
                [
                    {
                        id:7, 
                        lbumSrc:"https://static.wikia.nocookie.net/k-on/images/0/00/HTT_II_%C3%81lbum.png/revision/latest?cb=20110704221001&path-prefix=es", 
                        albumName:"Ho-Kago Tea Time",
                        color: "#77ff00", 
                        albumArtist: "K-ON", 
                        albumDesc:"Fuwa fuwa time is a genre all by itself. Anime, j-pop, punk pop, j-rock, influenced by hard rock as well."
                    },
                    {
                        id:8, 
                        albumSrc:"https://e.snmc.io/i/600/w/2a9a36095dfc6769f7907c89007f394d/7068695/crush-wonderlost-Cover-Art.jpg", 
                        albumName:"Wonderlost", 
                        color: "#77ff00", 
                        albumArtist: "Crush", 
                        albumDesc:"Pop, Hip-Hop, R&B, Experimental"
                    },
                    {
                        id:9, 
                        albumSrc:"https://e.snmc.io/i/1200/s/2a92ab5fe62154f7fd252b3c18791161/3537929", 
                        albumName:"Tokyo Utopia Tsushin", 
                        color: "#77ff00", 
                        albumArtist: "Lamp", 
                        albumDesc:"Shibuya-kei, Jazz Pop, Progressive Pop Lounge, Progressive Pop, Sophisti-Pop"
                    },
                    {
                        id:10, 
                        albumSrc:"https://i.ytimg.com/vi/33VE3m6q9sk/hqdefault.jpg?sqp=-oaymwEWCMACELQBIAQqCghQEJADGFogjgJIWg&rs=AMzJL3mechZFNCI_-KHOR-X8lgu-dftNcg", 
                        albumName:"あらためまして、はじめまして、ミドリです", 
                        color: "#77ff00", 
                        albumArtist: "ミドリ", 
                        albumDesc:"Art Punk, Noise Rock, Jazz-Rock, Experimental Rock, Post-Hardcore, Japanese Hardcore"
                    },
                    {
                        id:11, 
                        albumSrc:"https://i.scdn.co/image/ab67616d0000b2735b131d745dafd8666254fe96", 
                        albumName:"Sawayama", 
                        color: "#77ff00", 
                        albumArtist: "Rina Sawayama", 
                        albumDesc:"Alternative/indie, rock"
                    },
                    {
                        id:12, 
                        albumSrc:"https://upload.wikimedia.org/wikipedia/en/c/cf/One_X.png", 
                        albumName:"One-X", 
                        color: "#77ff00", 
                        albumArtist: "Lincoln", 
                        albumDesc:"Post-Grunge, Hard Rock, Alternative Metal, Alt-Rock and Nu-Metal"
                    },
                ],
                // City Pop (2-3)
                [
                    {
                        id:13, 
                        albumSrc:"https://i.scdn.co/image/ab67616d0000b273cfd93d36fe2365f9436587d1", 
                        albumName:"Timely!!",
                        color: "#9ae6d4", 
                        albumArtist: "Anri", 
                        albumDesc:"City pop, electronic, funk, disco. This is one of my most favourite-st albums of all time bro."
                    },
                    {
                        id:14, 
                        albumSrc:"https://m.media-amazon.com/images/I/51bK9GzC3WL._AC_.jpg", 
                        albumName:"Big Wave", 
                        color: "#c4f1ff", 
                        albumArtist: "Tatsuro Yamashita", 
                        albumDesc:"No wait THIS one is my favourite albums."
                    },
                    {
                        id:15, 
                        albumSrc:"https://m.media-amazon.com/images/I/51wb6-1N1hL._AC_.jpg", 
                        albumName:"Sunshower", 
                        color: "#fff8e3", 
                        albumArtist: "Taeko Ohnuki", 
                        albumDesc:"Or maybe this one, honestly......"
                    },
                    {
                        id:16, 
                        albumSrc:"https://e.snmc.io/i/1200/s/488d8a64277bfbaf528ac95d7e6f2f58/2590135", 
                        albumName:"TOKYO SNIPER",
                        color: "#1ebd4e", 
                        albumArtist: "Ryusenkei", 
                        albumDesc:"Jazz, funk, soul, and of course citypop. This whole album is a vibe."
                    },
                    {
                        id:17, 
                        albumSrc:"https://e.snmc.io/i/1200/s/876cd73cbcff6370be00a2c6cd14ca9c/2832917", 
                        albumName:"Silent Flight", 
                        color: "#e2b900", 
                        albumArtist: "Tomomi Sano", 
                        albumDesc:"If you're looking for something that's related to Tokyo Sniper. I keep coming back to this album!"
                    },
                    {
                        id:18, 
                        albumSrc:"https://e.snmc.io/i/600/s/650e7cbd5219f44f6cf91a8d5490686f/6399849/%E5%B1%B1%E4%B8%8B%E9%81%94%E9%83%8E-tatsuro-yamashita-ride-on-time-rainy-walk-Cover-Art.jpg", 
                        albumName:"Ride on Time", 
                        color: "#faca39", 
                        albumArtist: "Tatsuro Yamashita", 
                        albumDesc:"If I could just list all of Tatsuro's albums, I would. This album alone accompanies you on a bright summer's day, comforts you when you cry, clears your skin, raises your grades, eliminates all anxiety, and a host of other good feeling things that things tend to do. Ride on Time isn't an album, it's a religion."
                    },
                ],
                [
                    {
                        id:19, 
                        albumSrc:"https://e.snmc.io/i/600/s/93fff69392d151e51eb4cbe19cc09a6d/8750856/platinum-900-free-at-last-Cover-Art.jpg", 
                        albumName:"Free (at last)",
                        color: "#efbfff", 
                        albumArtist: "Platinum 900", 
                        albumDesc:"Fresh citypop, lowkey sophisticore, somehow the songs feel so new to me."
                    },
                    {
                        id:20, 
                        albumSrc:"https://i.discogs.com/UrNEwPg2sh0KgjM-wuBcOKDEDkdHBJwMJpqIdOIggZo/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTIyMjQ0/ODUxLTE2NDYzNTMw/ODItNzEwNS5qcGVn.jpeg", 
                        albumName:"Magical", 
                        color: "#ff82cf", 
                        albumArtist: "Junko Ohashi", 
                        albumDesc:"AWOOOOOOOOOOOOOOOOOO 56709!"
                    },
                    {
                        id:21, 
                        albumSrc:"https://i.scdn.co/image/ab67616d0000b27397a120b47dd41ca08bae19c2", 
                        albumName:"Summer Breeze", 
                        color: "#bcff82", 
                        albumArtist: "Piper", 
                        albumDesc:"Tasty guitar, nostalgic summer feels... Paradise."
                    },
                    {
                        id:22, 
                        albumSrc:"https://images.genius.com/8b7265a0e757f993db4dc76df2f55dfd.600x600x1.jpg", 
                        albumName:"Songs",  
                        color: "#f0d3f5", 
                        albumArtist: "Sugar Babe", 
                        albumDesc:"One of my absolute favourites and not for any particular reason. I feel a rush of serotonin whenever I listen to this."
                    },
                    {
                        id:23, 
                        albumSrc:"https://i.discogs.com/3skBye4gvB2yX9SsJGkZk4vQgHqwdtX7demMXwPLGPc/rs:fit/g:sm/q:90/h:600/w:591/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTQ5NTI1/ODEtMTYyNTYwMDI1/MS02MzMwLmpwZWc.jpeg", 
                        albumName:"All of Me", 
                        color: "#e2b900", 
                        albumArtist: "Masayoshi Takanaka", 
                        albumDesc:"Masayoshi Takanaka...the man, the myth, the LEGEND. This is THE album. Nothing more needs to be said. This guy is amazing. Did you know he played a guitar that was shaped like a SURF BOARD???"
                    },
                    {
                        id:24, 
                        albumSrc:"https://i.discogs.com/P2ddKL7Jq_eJKn9JE5DUtKzwBrOmRJw8tuXKM4fketA/rs:fit/g:sm/q:90/h:591/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTU2MDM4/MzAtMTYwMjUwMzU5/MC0yNTQ5LnBuZw.jpeg", 
                        albumName:"Love Trip", 
                        color: "#d3e0f5", 
                        albumArtist: "Takako Mamiya", 
                        albumDesc:"Could you ever imagine a Citypop-top-picks without Love Trip? YOU FOOL! It cannot be ever imagined. Get it out of your head now. And now recover by relistening to the album for the 400th time."
                    },
                ],
                // Pop Rock (4-5)
                [
                    {
                        id:25, 
                        albumSrc:"https://upload.wikimedia.org/wikipedia/en/e/ea/Blackparadecover.jpg", 
                        albumName:"The Black Parade",
                        color: "#24b36e", 
                        albumArtist: "My Chemical Romance", 
                        albumDesc:"Emo, Punk rock, Pop-punk, Pop music, Alternative rock. MAMA WE ALL GO TO HELL."
                    },
                    {
                        id:26, 
                        albumSrc:"https://m.media-amazon.com/images/I/71ajNuf3VlL._AC_SL1082_.jpg", 
                        albumName:"Collide With The Sky", 
                        color: "#24b36e", 
                        albumArtist: "Pierce the Veil", 
                        albumDesc:"I feel like I'm angstily entering the darkness."
                    },
                    {
                        id:27, 
                        albumSrc:"https://upload.wikimedia.org/wikipedia/en/0/00/Fall_Out_Boy_-_From_Under_the_Cork_Tree_-_CD_album_cover.jpg", 
                        albumName:"From Under The Cork Tree",
                        color: "#24b36e", 
                        albumArtist: "Fall Out Boy", 
                        albumDesc:"I'm falling out of a theatre."
                    },
                    {
                        id:28, 
                        albumSrc:"https://f4.bcbits.com/img/a0275338940_10.jpg", 
                        albumName:"Parannoul, Asian Glow, sonhos tomam conta",
                        color: "#24b36e", 
                        albumArtist: "Downfall of The Neon Youth", 
                        albumDesc: "I KNOW this is emogaze/blackgaze and post-hardcore but I don't know where else to put it. Noice album."
                    },
                    {
                        id:29, 
                        albumSrc:"https://cdn.albumoftheyear.org/album/225133-1.jpg", 
                        albumName:"line!",
                        color: "#24b36e", 
                        albumArtist: "Sunny Day Service", 
                        albumDesc:"Dududududuudu"
                    },
                    {
                        id:30, 
                        albumSrc:"https://i.scdn.co/image/ab67616d00001e025f2ca3e8b93fd5bc304480f5", 
                        albumName:"ワールドイズユアーズ (World Is Yours)",
                        color: "#24b36e", 
                        albumArtist: "Mass of the Fermenting Dregs", 
                        albumDesc:"Noisy and punky and rocky and it's popular so I'll just put it here."
                    },
                ],
                [
                    {
                        id:31, 
                        albumSrc:"https://media.pitchfork.com/photos/5de53ae09669180008bb62e6/1:1/w_600/somewherecity.jpg", 
                        albumName:"Somewhere City",
                        color: "#24b36e", 
                        albumArtist: "Origami Angel", 
                        albumDesc:"Midwest emo, pop punk, and lowkey math pop but maybe I'm delusional."
                    },
                    {
                        id:32, 
                        albumSrc:"https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/31/5c/9b/315c9b0b-468f-35ed-21ae-1ab3603f9939/00602577434303.rgb.jpg/600x600bf-60.jpg", 
                        albumName:"有頂天 (Uchouten)",
                        color: "#24b36e", 
                        albumArtist: "Origami Artist", 
                        albumDesc:"I WANNA PLAY GUITAR WHILE RIDING ON A SCOOTER!!!"
                    },
                    {
                        id:33, 
                        albumSrc:"https://i.scdn.co/image/ab67616d0000b273827c6792fe8f6f0c289c7b68", 
                        albumName:"s p a c e [ s ]",
                        color: "#24b36e", 
                        albumArtist: "Survive Said The Prophet", 
                        albumDesc:"J-rock, J-pop, Banana Fishes, fate somehow brings me hope inside my heart."
                    },
                    {
                        id:34, 
                        albumSrc:"https://i.scdn.co/image/ab67616d0000b273fbf78afab76ccfee9ea6711d", 
                        albumName:"I11",
                        color: "#24b36e", 
                        albumArtist: "a crowd of rebellion", 
                        albumDesc:"Metalcore, J-pop"
                    },
                    {
                        id:35, 
                        albumSrc:"https://upload.wikimedia.org/wikipedia/en/f/f8/Candy_Claws_-_Ceres_%26_Calypso_in_the_Deep_Time.jpeg", 
                        albumName:"Ceres & Calypso in the Deep Time",
                        color: "#24b36e", 
                        albumArtist: "Candy Claws", 
                        albumDesc:"Yes, this is shoegaze and dreampop... I need another section."
                    },
                    // {
                    //     id:36, 
                    //     albumSrc:"https://i.scdn.co/image/ab67616d0000b2732c86787e99e9e2b6ec7ecaec", 
                    //     albumName:"When The World Stopped Moving: The Live EP",
                    //     color: "#24b36e", 
                    //     albumArtist: "Lizzy McAlpine", 
                    //     albumDesc:"This album is so soft. For some reason, it gives me nostalgia. Though it's one of the sadder albums on here, I think."
                    // },
                ],
                // Math Rock (6-7)
                [
                    {
                        id:37, 
                        albumSrc:"https://s9.limitedrun.com/images/1270377/1XX_1500_300.jpg", 
                        albumName:"工作WORK",
                        color: "#e3e85a", 
                        bgColor: "#e85ae3",
                        albumArtist: "Elephant Gym", 
                        albumDesc:"Taiwanese Band, I'm obsessed."
                    },
                    {
                        id:38, 
                        albumSrc:"https://f4.bcbits.com/img/a2051589892_65", 
                        albumName:"Comma",
                        color: "#e3e85a", 
                        bgColor: "#e85ae3",
                        albumArtist: "Monobody", 
                        albumDesc:"Sparkly, jazzy, mathy, and not to mention rocky."
                    },
                    {
                        id:39, 
                        albumSrc:"https://f4.bcbits.com/img/a2267339723_10.jpg", 
                        albumName:"High On Bikes",
                        color: "#e3e85a", 
                        bgColor: "#e85ae3",
                        albumArtist: "Dios Trio", 
                        albumDesc:"Yo, Duh."
                    },
                    {
                        id:40, 
                        albumSrc:"https://f4.bcbits.com/img/a3924986204_10.jpg", 
                        albumName:"Management",
                        color: "#e3e85a", 
                        bgColor: "#e85ae3",
                        albumArtist: "Delta Sleep", 
                        albumDesc:"Math-Rock, Post-Hardcore"
                    },
                    {
                        id:41, 
                        albumSrc:"https://f4.bcbits.com/img/a3412567203_10.jpg", 
                        albumName:"Intra Mental",
                        color: "#e3e85a", 
                        bgColor: "#e85ae3", 
                        albumArtist: "Stage Kids", 
                        albumDesc:"There's also Jazz Fusion elements in here :)"
                    },
                    {
                        id:42, 
                        albumSrc:"https://f4.bcbits.com/img/a1403430714_10.jpg", 
                        albumName:"Tom's Story",
                        color: "#e3e85a", 
                        bgColor: "#e85ae3", 
                        albumArtist: "Tom's Story", 
                        albumDesc:"A math-rock band from the Philippines!."
                    },
                ],
                [
                    {
                        id:43, 
                        albumSrc:"https://i.discogs.com/3nYQvEEKx910otCuMGb7oWpNSUZH2qELhU12EvpofRM/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTExMzc2/OTY0LTE1MjI2MDk3/NjEtNzgxMC5qcGVn.jpeg", 
                        albumName:"Thereafter",
                        color: "#e3e85a", 
                        bgColor: "#e85ae3",
                        albumArtist: "Save Us From the Archon", 
                        albumDesc:"Going from math rock to mathcore and prog metal"
                    },
                    {
                        id:44, 
                        albumSrc:"https://i.scdn.co/image/ab67616d0000b27393c92357a4e939203e3d3fb1", 
                        albumName:"split",
                        color: "#e3e85a", 
                        bgColor: "#e85ae3", 
                        albumArtist: "archipiélagos", 
                        albumDesc:"Doesn't the album cover kind of look like ice cream?"
                    },
                    {
                        id:45, 
                        albumSrc:"https://upload.wikimedia.org/wikipedia/en/d/d0/For_Long_Tomorrow.jpg", 
                        albumName:"For Long Tomorrow",
                        color: "#e3e85a", 
                        bgColor: "#e85ae3", 
                        albumArtist: "toe", 
                        albumDesc:"BEST ALBUM OF ALL TIME."
                    },
                    {
                        id:46, 
                        albumSrc:"https://i.scdn.co/image/ab67616d0000b2739140de0bace4c7ad18772317", 
                        albumName:"the first action",
                        color: "#e3e85a",  
                        albumArtist: "the cabs", 
                        albumDesc:"Math rock, screaming."
                    },
                    {
                        id:47, 
                        albumSrc:"https://lastfm.freetls.fastly.net/i/u/500x500/790a54ca75151ad5848d06a02727cc53.jpg", 
                        albumName:"Yesterday, 12 Films Later.",
                        color: "#e3e85a", 
                        bgColor: "#e85ae3", 
                        albumArtist: "chouchou merged syrups", 
                        albumDesc:"Passionate math rock, kinda pop-y."
                    },
                    {
                        id:48, 
                        albumSrc:"https://i.scdn.co/image/ab67616d0000b273af0296b68297b5f5997c5f27", 
                        albumName:"Astero",
                        color: "#e3e85a", 
                        bgColor: "#e85ae3", 
                        albumArtist: "37500", 
                        albumDesc:"Noise rock, math rock, complex, technical, aggressive, dissonant, anxious, uncommon time signatures, instrumental, heavy, bitmapcore >:3."
                    },
                ],
                // Metal (8-9)
                [
                    {
                        id:37, 
                        albumSrc:"https://upload.wikimedia.org/wikipedia/en/4/40/Meshuggah_-_Catch_Thirtythree_-_cover.jpg", 
                        albumName:"Catch ThirtyThree",
                        color: "#d92323", 
                        albumArtist: "Meshuggah", 
                        albumDesc:"Linear-algebra bitmapcore to be honest with you."
                    },
                    {
                        id:38, 
                        albumSrc:"https://i.scdn.co/image/ab67616d0000b2736ba1621cfd50a691978fa1f7", 
                        albumName:"My Beautiful Twisted Nightmares in Aurora Rainbow Darkness",
                        color: "#d92323", 
                        albumArtist: "Vampilia", 
                        albumDesc:"KNCKHKRHKHKXHRKXH [classical music]."
                    },
                    {
                        id:39, 
                        albumSrc:"https://upload.wikimedia.org/wikipedia/en/2/29/De-Loused_in_the_Comatorium.jpeg", 
                        albumName:"De-Loused in the Comatorium",
                        color: "#d92323",
                        albumArtist: "The Mars Volta", 
                        albumDesc:"Prog metal?! Rock?! IDK"
                    },
                    {
                        id:40, 
                        albumSrc:"https://f4.bcbits.com/img/a1718888280_65", 
                        albumName:"Esoteric Malacology",
                        color: "#d92323",
                        albumArtist: "Slugdge", 
                        albumDesc:"DEATH metal (die), prog metal"
                    },
                    {
                        id:41, 
                        albumSrc:"https://i.scdn.co/image/ab67616d0000b2734ce449dc10fbaad2523806d6", 
                        albumName:"THANK GOD, THERE ARE HUNDREDS OF WAYS TO KiLL ENEMiES",
                        color: "#d92323", 
                        albumArtist: "SiM", 
                        albumDesc:"Thank god, there are hundreds of ways to kill enemies!"
                    },
                    {
                        id:42, 
                        albumSrc:"https://f4.bcbits.com/img/a3088714416_10.jpg", 
                        albumName:"Etemen Ænka",
                        color: "#d92323", 
                        albumArtist: "Dvne", 
                        albumDesc:"Omega Severer (wink wink)."
                    },
                ],
                [
                    {
                        id:43, 
                        albumSrc:"https://e.snmc.io/i/600/s/0d1c27615dfcf4ce98fa088775ac6f9c/5349268/ariana-grande-my-everything-Cover-Art.png", 
                        albumName:"My Everything",
                        color: "#e3e85a", 
                        bgColor: "#e85ae3",
                        albumArtist: "Ariana Grande", 
                        albumDesc:"I went to Ariana Grande's Sweetner Concert. After taking so many videos my phone lost storage ;-;."
                    },
                    {
                        id:44, 
                        albumSrc:"https://i.scdn.co/image/ab67616d0000b273ff5429125128b43572dbdccd", 
                        albumName:"4",
                        color: "#e3e85a", 
                        bgColor: "#e85ae3", 
                        albumArtist: "Beyonce", 
                        albumDesc:"Beyonce."
                    },
                    {
                        id:45, 
                        albumSrc:"https://upload.wikimedia.org/wikipedia/en/4/4d/Queen_A_Night_At_The_Opera.png", 
                        albumName:"A Night at The Opera",
                        color: "#e3e85a", 
                        bgColor: "#e85ae3", 
                        albumArtist: "Queen", 
                        albumDesc:"At one point, Queen was my top artist of the year on Spotify, and that's when I realised how often I listen to Queen."
                    },
                    {
                        id:46, 
                        albumSrc:"https://m.media-amazon.com/images/I/71Z0rLIvpuL._AC_SL1448_.jpg", 
                        albumName:"American Idiot",
                        color: "#e3e85a", 
                        bgColor: "#e85ae3", 
                        albumArtist: "Green Day", 
                        albumDesc:"Unrelated to this album, but when I didn't really know Green Day, I heard they made Basket Case and I thought, 'huh, Green Day? Baskets? is it a band about Easter???!?' I don't really know what was going through my head back then."
                    },
                    {
                        id:47, 
                        albumSrc:"https://upload.wikimedia.org/wikipedia/en/f/f6/Taylor_Swift_-_1989.png", 
                        albumName:"1989",
                        color: "#e3e85a", 
                        bgColor: "#e85ae3", 
                        albumArtist: "Taylor Swift", 
                        albumDesc:"Blank Space reminds me of driving back from a day going skiing, eating bite-sized brownies that they sell at the food court over there. Sometimes we ate poutine at ski places. I really liked that poutine."
                    },
                    {
                        id:48, 
                        albumSrc:"https://i.scdn.co/image/ab67616d0000b2737c5196593b6ab9382a794d26", 
                        albumName:"Greatest Hits – Chapter One",
                        color: "#e3e85a", 
                        bgColor: "#e85ae3", 
                        albumArtist: "Kelly Clarkson", 
                        albumDesc:"I had a very very strong Kelly Clarkson phase. I listened to her songs every second of the day and I got her CDs and I could tell you the details of each of the MVs. Since then I don't think I've ever had a stronger obsession."
                    },
                ],
                // Classical (10-11)
                [
                    {
                        id:73, 
                        albumSrc:"https://i.ebayimg.com/images/g/h6UAAOSwV~tcvhOR/s-l300.jpg", 
                        albumName:"Piano Concerto in A minor, Op 16",
                        color: "#F7BFB4", 
                        bgColor: "#5B4B49",
                        albumArtist: "Edvard Grieg (Arthur Rubinstein)", 
                        albumDesc:"The whole package."
                    },
                    {
                        id:74, 
                        albumSrc:"https://m.media-amazon.com/images/I/81Vor6B-LlL._AC_SX466_.jpg", 
                        albumName:"19 Nocturnes",
                        color: "#F7BFB4", 
                        bgColor: "#5B4B49", 
                        albumArtist: "Frédéric Chopin (Arthur Rubinstein)", 
                        albumDesc:"[traumatic, nostalgic, ecstatic flashbacks to when my friend played this one Chopin piece over and over again and I went mad or when I listened to Chopin 24/7 and thought hm maybe I should somehow play it on the clarinet]"
                    },
                    {
                        id:75, 
                        albumSrc:"https://solarsystem.nasa.gov/system/resources/detail_files/2486_stsci-h-p1936a_1800.jpg", 
                        albumName:"The Planets, Op. 32",
                        color: "#F7BFB4", 
                        bgColor: "#5B4B49", 
                        albumArtist: "Gustav Holst", 
                        albumDesc:"JUPITER JUPITER JUPITER JUPITER JUPITER"
                    },
                    {
                        id:76, 
                        albumSrc:"https://images-na.ssl-images-amazon.com/images/I/71rgJgPM6FL.jpg", 
                        albumName:"Tristan und Isolde",
                        color: "#F7BFB4", 
                        bgColor: "#5B4B49", 
                        albumArtist: "Richard Wagner", 
                        albumDesc:"Sublime!!!!!! I can feel an actual epic story going on with this music. Or actually, many stories. It feels like I'm in another dimension."
                    },
                    {
                        id:77, 
                        albumSrc:"https://i.discogs.com/1vV7KWxVcu2r8Ff-ZNrBG5f5PWiWTQLbb5bzKRuA-Ao/rs:fit/g:sm/q:40/h:300/w:300/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTMyMTYy/NTctMTMyMDg1Nzk0/Ni5qcGVn.jpeg", 
                        albumName:"La mer",
                        color: "#F7BFB4", 
                        bgColor: "#5B4B49", 
                        albumArtist: "Debussy", 
                        albumDesc:"I suddenly feel like I'm being slapped by salt water and being surrounded by fish."
                    },
                    {
                        id:78, 
                        albumSrc:"https://i.discogs.com/UOHBcbdvP11IkzOsLPWCep5PJagYtGcS7EMTds104A0/rs:fit/g:sm/q:90/h:600/w:596/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEwODgx/NjMyLTE1MDU4Nzc1/NzAtNDcxNS5tcG8.jpeg", 
                        albumName:"The Rite of Spring",
                        color: "#F7BFB4", 
                        bgColor: "#5B4B49", 
                        albumArtist: "Stravinsky", 
                        albumDesc:"👹👹👹"
                    },
                ],
                [
                    {
                        id:79, 
                        albumSrc:"https://images-na.ssl-images-amazon.com/images/I/71W3EhP6dzL.jpg", 
                        albumName:"Daphnis et Chloé",
                        color: "#F7BFB4", 
                        bgColor: "#5B4B49",
                        albumArtist: "Maurice Ravel", 
                        albumDesc:"Imagine being a ballerino dancing to this bro... I wouldn't dance I would FLY."
                    },
                    {
                        id:80, 
                        albumSrc:"https://i.scdn.co/image/ab67616d0000b2739efa647c7dcc59b01ad28257", 
                        albumName:"Polovtsian Dances",
                        color: "#F7BFB4", 
                        bgColor: "#5B4B49", 
                        albumArtist: "Alexander Borodin", 
                        albumDesc:"Dude was a full time chemist and he made THIS. WHAT AN ICON."
                    },
                    {
                        id:81, 
                        albumSrc:"https://drop.philharmoniedeparis.fr/CMDP/CMDP000010300/L-entree-des-animaux-dans-l-arche-de-Noe-Jan-Brueghel-l-ancien-1613-The-J-Paul-Getty-Museum-Los-Angeles.jpg", 
                        albumName:"Le Carnaval des animaux",
                        color: "#F7BFB4", 
                        bgColor: "#5B4B49", 
                        albumArtist: "Camille Saint-Saëns", 
                        albumDesc:"This helps me to channel my inner kangaroo. My favourite parts are Poules et coqs, Aquarium, and obviously, Le cygne."
                    },
                    {
                        id:82, 
                        albumSrc:"https://m.media-amazon.com/images/I/51zs8rxGMnL.jpg", 
                        albumName:"Hungarian Dances",
                        color: "#F7BFB4", 
                        bgColor: "#5B4B49", 
                        albumArtist: "Johannes Brahms", 
                        albumDesc:"Apparently Hungarian has this letter: ő. C'est comme un double accent aigu."
                    },
                    {
                        id:83, 
                        albumSrc:"https://upload.wikimedia.org/wikipedia/commons/c/cf/Paganini.jpeg", 
                        albumName:"24 Caprices Op.1",
                        color: "#F7BFB4", 
                        bgColor: "#5B4B49",  
                        albumArtist: "Niccolo Paganini", 
                        albumDesc:"Panini is the devil of music."
                    },
                    {
                        id:84, 
                        albumSrc:"https://i.scdn.co/image/ab67616d0000b2732b4587efd95a45684237e6d0", 
                        albumName:"Symphony No. 2 Op. 27",
                        color: "#F7BFB4", 
                        bgColor: "#5B4B49", 
                        albumArtist: "Sergei Rachmaninoff", 
                        albumDesc:"Ah yes."
                    },
                ],
                // Pop (12-13)
                [
                    {
                        id:37, 
                        albumSrc:"https://i.scdn.co/image/ab67616d0000b2734df3245f26298a1579ecc321", 
                        albumName:"Planet Her",
                        color: "#e3e85a", 
                        bgColor: "#e85ae3",
                        albumArtist: "Doja Cat", 
                        albumDesc:"Doja Cat's music is so addicting. I've noticed that I've listened to so many of her songs on repeat. She's definitely very iconic."
                    },
                    {
                        id:38, 
                        albumSrc:"https://i.scdn.co/image/ab67616d0000b2739c4ba827e585fabd3cfd90f2", 
                        albumName:"Traveler",
                        color: "#e3e85a", 
                        bgColor: "#e85ae3",
                        albumArtist: "Official HIGE DANdism", 
                        albumDesc:"Inspirational, motivational and emotional, this album's got all three. One of my most favourite albums of all time."
                    },
                    {
                        id:39, 
                        albumSrc:"https://e.snmc.io/i/600/s/0d1c27615dfcf4ce98fa088775ac6f9c/5349268/ariana-grande-my-everything-Cover-Art.png", 
                        albumName:"My Everything",
                        color: "#e3e85a", 
                        bgColor: "#e85ae3",
                        albumArtist: "Ariana Grande", 
                        albumDesc:"I went to Ariana Grande's Sweetner Concert. After taking so many videos my phone lost storage ;-;."
                    },
                    {
                        id:40, 
                        albumSrc:"https://upload.wikimedia.org/wikipedia/en/5/55/Michael_Jackson_-_Thriller.png", 
                        albumName:"Thriller",
                        color: "#e3e85a", 
                        bgColor: "#e85ae3",
                        albumArtist: "Michael Jackson", 
                        albumDesc:"I don't have to explain why I like this album, right?"
                    },
                    {
                        id:41, 
                        albumSrc:"https://i.scdn.co/image/ab67616d0000b2737c5196593b6ab9382a794d26", 
                        albumName:"Greatest Hits – Chapter One",
                        color: "#e3e85a", 
                        bgColor: "#e85ae3", 
                        albumArtist: "Kelly Clarkson", 
                        albumDesc:"I had a very very strong Kelly Clarkson phase. I listened to her songs every second of the day and I got her CDs and I could tell you the details of each of the MVs. Since then I don't think I've ever had a stronger obsession."
                    },
                    {
                        id:42, 
                        albumSrc:"https://upload.wikimedia.org/wikipedia/en/e/eb/ParamoreParamore.png", 
                        albumName:"Paramore",
                        color: "#e3e85a", 
                        bgColor: "#e85ae3", 
                        albumArtist: "Paramore", 
                        albumDesc:"I'm still into y- I mean, Paramore."
                    },
                ],
                [
                    {
                        id:43, 
                        
                    },
                    {
                        id:44, 
                        albumSrc:"https://i.scdn.co/image/ab67616d0000b273ff5429125128b43572dbdccd", 
                        albumName:"4",
                        color: "#e3e85a", 
                        bgColor: "#e85ae3", 
                        albumArtist: "Beyonce", 
                        albumDesc:"Beyonce."
                    },
                    {
                        id:45, 
                        albumSrc:"https://upload.wikimedia.org/wikipedia/en/4/4d/Queen_A_Night_At_The_Opera.png", 
                        albumName:"A Night at The Opera",
                        color: "#e3e85a", 
                        bgColor: "#e85ae3", 
                        albumArtist: "Queen", 
                        albumDesc:"At one point, Queen was my top artist of the year on Spotify, and that's when I realised how often I listen to Queen."
                    },
                    {
                        id:46, 
                        albumSrc:"https://m.media-amazon.com/images/I/71Z0rLIvpuL._AC_SL1448_.jpg", 
                        albumName:"American Idiot",
                        color: "#e3e85a", 
                        bgColor: "#e85ae3", 
                        albumArtist: "Green Day", 
                        albumDesc:"Unrelated to this album, but when I didn't really know Green Day, I heard they made Basket Case and I thought, 'huh, Green Day? Baskets? is it a band about Easter???!?' I don't really know what was going through my head back then."
                    },
                    {
                        id:47, 
                        albumSrc:"https://upload.wikimedia.org/wikipedia/en/f/f6/Taylor_Swift_-_1989.png", 
                        albumName:"1989",
                        color: "#e3e85a", 
                        bgColor: "#e85ae3", 
                        albumArtist: "Taylor Swift", 
                        albumDesc:"Blank Space reminds me of driving back from a day going skiing, eating bite-sized brownies that they sell at the food court over there. Sometimes we ate poutine at ski places. I really liked that poutine."
                    },
                    {
                        id:48, 
                        
                    },
                ],
                // K-Pop (14-15)
                [
                    {
                        id:49, 
                        albumSrc:"https://i.scdn.co/image/ab67616d0000b2736538b8e1b5c7b2a9d2211769", 
                        albumName:"Perfect Velvet",
                        color: "#d7b7e8",                        albumArtist: "Red Velvet", 
                        albumDesc:"There's a reason why this is called PERFECT Velvet. Everything about Red Velvet is perfect. I don't stan groups because I'm lazy and have too many things going on but I'm damn near a stan just for Red Velvet. If I could keep only one kpop album out of all of the albums there could ever exist, I would choose this one. Though not really, because I'm too scared to get tired of any of these songs. They're so perfect. UGH. UGHWTIGHEPIUHG"
                    },
                    {
                        id:50, 
                        albumSrc:"https://upload.wikimedia.org/wikipedia/en/0/04/NCT_127_Neo_Zone.jpg", 
                        albumName:"Neo Zone",
                        color: "#d7b7e8",                        albumArtist: "NCT 127", 
                        albumDesc:"I really like the trend where the songs make really weird and wack and loud sound effects out of even weirder and wack-er sounds. Also shout out to Mark Lee."
                    },
                    {
                        id:51, 
                        albumSrc:"https://upload.wikimedia.org/wikipedia/en/1/19/Mamamoo_Melting_album_cover.png", 
                        albumName:"Melting",
                        color: "#d7b7e8",                        albumArtist: "Mamamoo", 
                        albumDesc:"Mamamooo is a REALLY talented group. They are iconic in every way."
                    },
                    {
                        id:52, 
                        albumSrc:"https://upload.wikimedia.org/wikipedia/en/5/54/Shinee1of1.jpg", 
                        albumName:"1 of 1",
                        color: "#d7b7e8",                       
                         albumArtist: "SHINEE", 
                        albumDesc:"One of one giiirlll"
                    },
                    {
                        id:53, 
                        albumSrc:"https://upload.wikimedia.org/wikipedia/en/a/aa/IU-Modern_Times.jpg", 
                        albumName:"Modern Times",
                        color: "#d7b7e8",                        
                        albumArtist: "IU", 
                        albumDesc:"It's so hard to decide which IU album is the best. I wish I could say all, but if I was forced by gunpoint to say which one, I would probably say Modern Times. So jazzy. So perfectly done. So nostalgic. So everything. IU is so talented, dude."
                    },
                    {
                        id:54, 
                        albumSrc:"https://upload.wikimedia.org/wikipedia/en/6/62/GirlsGeneration5thAlbumLionHeart.jpg", 
                        albumName:"Lion Heart",
                        color: "#d7b7e8",                        
                        albumArtist: "Girls' Generation", 
                        albumDesc:"SNSD, I love you."
                    },
                ],
                [
                    {
                        id:55, 
                        albumSrc:"https://upload.wikimedia.org/wikipedia/en/b/bd/%2B%2B_%28Loona_EP%29.jpg", 
                        albumName:"[+ +]",
                        color: "#d7b7e8",                        
                        albumArtist: "LOONA", 
                        albumDesc:"I would sarcastically like to just say 'Stan LOONA'. They have good songs!"
                    },
                    {
                        id:56, 
                        albumSrc:"https://upload.wikimedia.org/wikipedia/en/e/ea/GFriend_LOL_album.jpg", 
                        albumName:"LOL",
                        color: "#d7b7e8",                        
                        albumArtist: "GFRIEND", 
                        albumDesc:"GFRIEND gives me many memories. Very happy memories. And makes me think of my friend who really likes GFRIEND. My friend and I used to listen to many songs and their list was always populated by many GFRIEND songs. At first I didn't like many girl group songs but after this indoctrination I have suddenly opened my eyes to the beautiful reality that is perfection."
                    },
                    {
                        id:57, 
                        albumSrc:"https://upload.wikimedia.org/wikipedia/en/0/0b/BTS_The_Most_Beautiful_Moment_In_Life%2C_Part_2_album_cover.jpg", 
                        albumName:"The Most Beautiful Moment in Life (All Parts)",
                        color: "#d7b7e8",                        
                        albumArtist: "BTS", 
                        albumDesc:"Old BTS is a vibe. Brings back those middle school memories, where I didn't have to work and I could focus on playing beat games, listening to Converse High, staying up until 3AM for no good reason, and drawing bad art."
                    },
                    {
                        id:58, 
                        albumSrc:"https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/31Kzns1EYyL.jpg", 
                        albumName:"White Wind",
                        color: "#d7b7e8", 
                        albumArtist: "Mamamoo", 
                        albumDesc:"Euroband."
                    },
                    {
                        id:59, 
                        albumSrc:"https://upload.wikimedia.org/wikipedia/en/5/52/BoA-KissMyLips.jpg", 
                        albumName:"Kiss My Lips",
                        color: "#d7b7e8",                        albumArtist: "BoA", 
                        albumDesc:"BoA is the Queen of K-pop."
                    },
                    {
                        id:60, 
                        albumSrc:"https://upload.wikimedia.org/wikipedia/en/c/cc/Oh_My_Girl_-_Secret_Garden.png", 
                        albumName:"Secret Garden",
                        color: "#d7b7e8",                        albumArtist: "OH MY GIRL", 
                        albumDesc:"Magical and melodical. I miss the sound of old-school k-pop girl groups."
                    },
                ],
                // K-Indie (16-17)
                [
                    {
                        id:85, 
                        albumSrc:"https://upload.wikimedia.org/wikipedia/en/e/e4/I_Am_Sam_%28EP%29.jpg", 
                        albumName:"I am Sam",
                        color: "#fff", 
                        albumArtist: "Sam Kim", 
                        albumDesc:"Sam Kim hits the good spot for a lot of different genres in his own cool style."
                    },
                    {
                        id:86, 
                        albumSrc:"https://i.scdn.co/image/ab67616d0000b273f694adfa02990eaca79fec1b", 
                        albumName:"LEGEND",
                        color: "#fff", 
                        albumArtist: "Jannabi", 
                        albumDesc:"Beautiful lyrics beautiful melodies beautiful everything. Listening to this album is like an experience instead of just listening to music."
                    },
                    {
                        id:87, 
                        albumSrc:"https://tartfroyo.com/wp-content/uploads/2015/09/what_i_want_to_say1.jpg", 
                        albumName:"What I Want to Say",
                        color: "#fff", 
                        albumArtist: "ACOURVE", 
                        albumDesc:"I'll never forget what this song is anymore."
                    },
                    {
                        id:88, 
                        albumSrc:"https://is3-ssl.mzstatic.com/image/thumb/Music115/v4/e7/9b/f4/e79bf4a5-7053-d78e-264d-52b2d366e2d8/196292221091.jpg/600x600bf-60.jpg", 
                        albumName:"Absence 'Side A'",
                        color: "#fff", 
                        albumArtist: "LambC", 
                        albumDesc:"LambC feels cozy to me. I've been listening ever since they came out with songs."
                    },
                    {
                        id:89, 
                        albumSrc:"https://m.media-amazon.com/images/I/41d4hu4e0rL.jpg", 
                        albumName:"Like The First Time",
                        color: "#fff", 
                        albumArtist: "Sung Si-Kyung", 
                        albumDesc:"Good ballads."
                    },
                    {
                        id:90, 
                        albumSrc:"https://e.snmc.io/i/600/s/560d5486d625eba5ce555c111e25c30a/7090369/10cm-4_0-Cover-Art.jpg", 
                        albumName:"4.0",
                        color: "#fff", 
                        albumArtist: "10cm", 
                        albumDesc:"I love 10cm. You love 10cm. Everyone loves 10cm."
                    },
                ],
                [
                    {
                        id:91, 
                        albumSrc:"http://images.genius.com/011ac6c1a1e0a929108a8da7e821320c.650x650x1.jpg", 
                        albumName:"23",
                        color: "#fff", 
                        albumArtist: "HYUCKOH", 
                        albumDesc:"It's hard to choose a favourite HYUCKOH album. These songs make me think and they make me feel alive in a cool, distinctive way than other albums on this website that make me feel alive. Does that make sense...?"
                    },
                    {
                        id:92, 
                        albumSrc:"https://i.scdn.co/image/ab67616d0000b27365e4ae41a54bfb34cadbdb3d", 
                        albumName:"TEAM BABY",
                        color: "#fff", 
                        albumArtist: "The Black Skirts", 
                        albumDesc:"It might be weird for me to do but I would consider this a 'classic' of K-indie."
                    },
                    {
                        id:93, 
                        albumSrc:"https://img.discogs.com/ybYRA_5DQGViPXKIjBNAVwYlzzA=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-14528812-1576495540-4418.jpeg.jpg", 
                        albumName:"Moonlight",
                        color: "#fff", 
                        albumArtist: "MeloMance", 
                        albumDesc:"Great songs. I love it overall."
                    },
                    {
                        id:94, 
                        albumSrc:"https://f4.bcbits.com/img/0015026299_10.jpg", 
                        albumName:"Midnight Candy",
                        color: "#fff", 
                        albumArtist: "Fromm", 
                        albumDesc:"Got those midnight candy vibes, honestly."
                    },
                    {
                        id:95, 
                        albumSrc:"https://i.scdn.co/image/ab67616d0000b273f0c2245886f59f33af6b5920", 
                        albumName:"L + -2",
                        color: "#fff", 
                        albumArtist: "JUROKEY", 
                        albumDesc:"I can't find any words to describe why I like this album, so all I'll say is: I align with this album."
                    },
                    {
                        id:96, 
                        albumSrc:"https://i.scdn.co/image/ab67616d0000b273c6ca4d01582256abb044c223", 
                        albumName:"LOVE",
                        color: "#fff", 
                        albumArtist: "ADOY", 
                        albumDesc:"It was hard to choose between Vivid and LOVE. Both solid albums."
                    },
                ],
                // Indie Rock (18-19)
                [
                    {
                        id:97, 
                        albumSrc:"https://e.snmc.io/i/1200/s/93cc41ebe9ff8bfe2cfa9809cf082ca2/9637392", 
                        albumName:"World is Yours",
                        color: "#fff", 
                        albumArtist: "Mass of Fermenting Dregs", 
                        albumDesc:"I feel spontaneous I feel rebellious I feel like figuring my life out I feel like not caring what others think anymore"
                    },
                    {
                        id:98, 
                        albumSrc:"https://i.scdn.co/image/ab67616d0000b27304a176f29248fe4b12a53f56", 
                        albumName:"A Call from My Dream",
                        color: "#fff", 
                        albumArtist: "Meaningful Stone", 
                        albumDesc:"Beep boop beep boop beep boop beep boop beep beep boop"
                    },
                    {
                        id:99, 
                        albumSrc:"https://cdn.albumoftheyear.org/album/474342-summer-tales.jpg", 
                        albumName:"Summer Tales",
                        color: "#fff", 
                        albumArtist: "Lacuna", 
                        albumDesc:"I'm so glad I found this band. I think of new beginnings, probably as a result of the time I found Lacuna's music."
                    },
                    {
                        id:100, 
                        albumSrc:"https://img.discogs.com/n_w753SX4EefBviur5hatWCF0SA=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-17867128-1615896047-6978.jpeg.jpg", 
                        albumName:"Nonadaptation ⭐",
                        color: "#fff", 
                        albumArtist: "SE SO NEON", 
                        albumDesc:"THIS ALBUM. THIS ALBUM FOR LIFE. It has helped me in the darkest of times. It gave me hope for the future."
                    },
                    {
                        id:101, 
                        albumSrc:"https://e.snmc.io/i/600/s/f86968cf26df7f835e5efba33c0302a0/5350536/%E3%81%8F%E3%82%8B%E3%82%8A-quruli-the-pier-Cover-Art.jpg", 
                        albumName:"The Pier",
                        color: "#fff", 
                        albumArtist: "Quruli", 
                        albumDesc:"Really creative and fresh. I have such a fun time listening to this album."
                    },
                    {
                        id:102, 
                        albumSrc:"https://m.media-amazon.com/images/I/A1xeSSr5jPL._AC_SL1500_.jpg", 
                        albumName:"SHISHAMO 3",
                        color: "#fff", 
                        albumArtist: "SHISHAMO", 
                        albumDesc:"This band is so good. When I start up a band I'll take inspiration from them!"
                    },
                ],
                [
                    {
                        id:103, 
                        albumSrc:"https://cdn.albumoftheyear.org/album/203711-flcl-progressive-alternative-music-from-the-series.jpg", 
                        albumName:"FLCL Progressive / Alternative",
                        color: "#fff", 
                        albumArtist: "The Pillows", 
                        albumDesc:"Best anime soundtrack. Best soundtrack. Best music."
                    },
                    {
                        id:104, 
                        albumSrc:"https://i.scdn.co/image/ab67616d0000b273fbf78afab76ccfee9ea6711d", 
                        albumName:"Ill",
                        color: "#fff", 
                        albumArtist: "a crowd of rebellion", 
                        albumDesc:"The best thing that happened to me last year was finding this album and this band."
                    },
                    {
                        id:105, 
                        albumSrc:"https://e.snmc.io/i/600/s/56dd66dca8669d330b6fd5018c355cd8/7989599/surl-i-know-Cover-Art.jpg", 
                        albumName:"I Know",
                        color: "#fff", 
                        albumArtist: "SURL", 
                        albumDesc:"If you didn't already figure out from the title of this website, I really like this album, so much so that it is one of my favourite albums."
                    },
                    {
                        id:106, 
                        albumSrc:"https://upload.wikimedia.org/wikipedia/en/f/fa/DAY6_-_SUNRISE_%28album%29.jpg", 
                        albumName:"SUNRISE",
                        color: "#fff", 
                        albumArtist: "Day6", 
                        albumDesc:"How could I have been so lazy that I SLEPT on Day6? It's something I'm ashamed of."
                    },
                    {
                        id:107, 
                        albumSrc:"https://e.snmc.io/i/1200/s/a87008718b977dd1f36565a0243be19f/7318305", 
                        albumName:"Uchoten",
                        color: "#fff", 
                        albumArtist: "POLKADOT STINGRAY", 
                        albumDesc:"Love love love it. I want to learn how to play my guitar on a hoverboard too."
                    },
                    {
                        id:108, 
                        albumSrc:"https://images.genius.com/63a54f28ee68f242ba6a8e4221fc5e6c.498x498x1.jpg", 
                        albumName:"Attitude",
                        color: "#fff", 
                        albumArtist: "Mrs. GREEN APPLE", 
                        albumDesc:"When I first found Mrs. GREEN APPLE I couldn't understand japanese and when I found a song from them somehow I was intimidated and was not sure how I could listen to them more. What an idiot I was."
                    },
                ],
                // R&B (20-21)
                [
                    {
                        id:109, 
                        albumSrc:"https://images.genius.com/ef56aca5228fcd7af151d1a561748b1a.1000x1000x1.jpg", 
                        albumName:"Will I See You Again?",
                        color: "#77ff00", 
                        albumArtist: "Thee Sacred Souls", 
                        albumDesc:"I'm angry they don't have more!"
                    },
                    {
                        id:110, 
                        albumSrc:"https://upload.wikimedia.org/wikipedia/en/d/d4/Honey_Mariah_Carey_Single.png", 
                        albumName:"Honey",
                        color: "#77ff00", 
                        albumArtist: "Mariah Carey", 
                        albumDesc:"I don't have to explain why I like this album either, right?"
                    },
                    {
                        id:111, 
                        albumSrc:"https://cdn.albumoftheyear.org/album/2015/34024-urban-flora.jpg", 
                        albumName:"Urban Flora",
                        color: "#77ff00", 
                        albumArtist: "Alina Baraz and Galimatia",
                        albumDesc:"Feels like I'm floating in space~"
                    },
                    {
                        id:112, 
                        albumSrc:"https://upload.wikimedia.org/wikipedia/en/7/74/Usher_-_Confessions_album_cover.jpg", 
                        albumName:"Confessions",
                        color: "#77ff00", 
                        albumArtist: "Usher", 
                        albumDesc:"Nostalgic also did Frozen steal from one of Usher's songs or was I imagining something?"
                    },
                    {
                        id:113, 
                        albumSrc:"https://upload.wikimedia.org/wikipedia/en/5/5f/On_the_6_%28Jennifer_Lopez_album_-_cover_art%29.png", 
                        albumName:"On the 6",
                        color: "#77ff00", 
                        albumArtist: "Jennifer Lopez", 
                        albumDesc:"Childhood. Anyway, just a few months ago I thought Jennifer Lopez and JLO were two different people. What the heck."
                    },
                    {
                        id:114, 
                        albumSrc:"https://cdn.albumoftheyear.org/album/50041-new-beginning.jpg", 
                        albumName:"New Beginning",
                        color: "#77ff00", 
                        albumArtist: "SWV", 
                        albumDesc:"You're the ooooooneeeeeee"
                    },
                ],
                [
                    {
                        id:115, 
                        albumSrc:"https://cdn2.albumoftheyear.org/250x/album/92686-feels-1.jpg", 
                        albumName:"FEELS",
                        color: "#77ff00", 
                        albumArtist: "Snoh Aalegra", 
                        albumDesc:"Hits different when you exist 😔"
                    },
                    {
                        id:116, 
                        albumSrc:"https://upload.wikimedia.org/wikipedia/en/thumb/f/f6/Off_the_wall.jpg/220px-Off_the_wall.jpg", 
                        albumName:"Off The Wall",
                        color: "#77ff00", 
                        albumArtist: "Michael Jackson", 
                        albumDesc:"Yes there are two MJ albums on this. Why wouldn't there be? You think I'm a fool?"
                    },
                    {
                        id:117, 
                        albumSrc:"https://e.snmc.io/i/600/w/64f719f4361cab0ce9754b61343480ac/7551498/raveena-lucid-Cover-Art.jpg", 
                        albumName:"Lucid", 
                        color: "#77ff00", 
                        albumArtist: "Raveena", 
                        albumDesc:"R&B, Neo-soul, Pop"
                    },
                    {
                        id:118, 
                        albumSrc:"https://upload.wikimedia.org/wikipedia/en/e/e2/Songs_in_the_key_of_life.jpg", 
                        albumName:"Songs in the Key of Life",
                        color: "#77ff00", 
                        albumArtist: "Stevie Wonder", 
                        albumDesc:"Stevie Wonder is 111120809284029384/10"
                    },
                    {
                        id:119, 
                        albumSrc:"https://upload.wikimedia.org/wikipedia/en/8/8e/Silk_Sonic_-_An_Evening_with_Silk_Sonic.png", 
                        albumName:"An Evening With Silk Sonic",
                        color: "#77ff00", 
                        albumArtist: "Silk Sonic", 
                        albumDesc:"Silc and sonic."
                    },
                    // {
                    //     id:120, 
                    //     albumSrc:"https://upload.wikimedia.org/wikipedia/en/5/55/LaurynHillTheMiseducationofLaurynHillalbumcover.jpg", 
                    //     albumName:"The Miseducation of Lauryn Hill",
                    //     color: "#77ff00", 
                    //     albumArtist: "Lauryn Hill", 
                    //     albumDesc:"Obviously."
                    // },
                ],
                // K-R&B (22-23)
                [
                    {
                        id:121, 
                        albumSrc:"https://cdn.albumoftheyear.org/album/407021-4-only.jpg", 
                        albumName:"4 ONLY",
                        color: "#66baff", 
                        albumArtist: "LeeHi", 
                        albumDesc:"Perfection."
                    },
                    {
                        id:122, 
                        albumSrc:"https://cdn.albumoftheyear.org/album/307733-outside.jpg", 
                        albumName:"Outside",
                        color: "#66baff", 
                        albumArtist: "Crush", 
                        albumDesc:"This is my hero backstory. My life will play out how this album goes."
                    },
                    {
                        id:123, 
                        albumSrc:"https://cdn.albumoftheyear.org/album/124628-zzz.jpg", 
                        albumName:"ZZZ",
                        color: "#66baff", 
                        albumArtist: "Zion.T", 
                        albumDesc:"I remember this album came out around the time I went to an amusement park for the first time in a long time with my friends."
                    },
                    {
                        id:124, 
                        albumSrc:"https://hiphopkr.com/wp-content/uploads/2020/07/june-ending.jpg", 
                        albumName:"Ending",
                        color: "#66baff", 
                        albumArtist: "JUNE", 
                        albumDesc:"[keyboard smashes]"
                    },
                    {
                        id:125, 
                        albumSrc:"https://e.snmc.io/i/600/s/6e6531ef7efdffce03110c2f446a2cf5/5802417/%ED%94%84%EB%9D%BC%EC%9D%B4%EB%A8%B8%EB%A6%AC-primary-2-Cover-Art.jpg", 
                        albumName:"2",
                        color: "#66baff", 
                        albumArtist: "Primary", 
                        albumDesc:"Primary is ESSENTIAL."
                    },
                    {
                        id:126, 
                        albumSrc:"https://e.snmc.io/i/600/s/c51ca2d554ad5a4e251ad61b8e016f5c/7253007/cheeze-plain-Cover-Art.jpg", 
                        albumName:"Plain",
                        color: "#66baff", 
                        albumArtist: "Cheeze", 
                        albumDesc:"Cheeze is so cheesy, if cheesy means tastes like cheese which means it's delicious and perfect in every way."
                    },
                ],
                [
                    {
                        id:127, 
                        albumSrc:"https://upload.wikimedia.org/wikipedia/en/f/f4/Dean_-_130_mood_%2C_TRBL.jpeg", 
                        albumName:"130 Mood: TRBL",
                        color: "#66baff", 
                        albumArtist: "DEAN", 
                        albumDesc:"D E A N."
                    },
                    {
                        id:128, 
                        albumSrc:"https://hiphopkr.com/wp-content/uploads/2019/10/hoody-departure.jpg", 
                        albumName:"Departure",
                        color: "#66baff", 
                        albumArtist: "Hoody", 
                        albumDesc:"AUGH Hoody's voice is SO GOOD."
                    },
                    {
                        id:129, 
                        albumSrc:"https://i.scdn.co/image/ab67616d0000b273c8464d4a616ff4c792abe11d", 
                        albumName:"Full of You",
                        color: "#66baff", 
                        albumArtist: "So Soo Bin", 
                        albumDesc:"Like I've said repetitively for so many other favourite albums, 'there's something special about this album'."
                    },
                    {
                        id:130, 
                        albumSrc:"https://cdn.albumoftheyear.org/album/92566-gallery.jpg", 
                        albumName:"GALLERY",
                        color: "#66baff", 
                        albumArtist: "Zico", 
                        albumDesc:"Z I C O."
                    },
                    {
                        id:140, 
                        albumSrc:"https://i.discogs.com/rot9vMxJQCt6E4NTjPAyQfTshMN7mhd-DrZwaZSU7R4/rs:fit/g:sm/q:90/h:600/w:596/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTIyMjk3/ODY3LTE2NDU3OTE2/MDItNTI2Ni5qcGVn.jpeg", 
                        albumName:"Idealism",
                        color: "#66baff", 
                        albumArtist: "Colde", 
                        albumDesc:"Iconic."
                    },
                    {
                        id:150, 
                        albumSrc:"https://i.scdn.co/image/ab67616d0000b27306db8df52fd6ff7a531b88fa", 
                        albumName:"Dawn Defibrillation, Vol. 1",
                        color: "#66baff", 
                        albumArtist: "Dvwn", 
                        albumDesc:"An entire experience. I can see taste smell hear and touch this album."
                    },
                ], 
                // Hip-Hop (24-25)
                [
                    {
                        id:151, 
                        albumSrc:"https://i.scdn.co/image/ab67616d0000b2732cb0a4a62e3597c8c76f1e1c", 
                        albumName:"Lil Mariko",
                        color: "", 
                        albumArtist: "Lil Mariko", 
                        albumDesc:"Don't ask me why I like this. Even I don't know."
                    },
                    {
                        id:152, 
                        albumSrc:"https://cdn.albumoftheyear.org/album/167068-the-movie-star.jpg", 
                        albumName:"The Movie Star",
                        color: "", 
                        albumArtist: "BewhY", 
                        albumDesc:"Solid album. I could listen from top to bottom."
                    },
                    {
                        id:153, 
                        albumSrc:"https://cdn.albumoftheyear.org/album/84324-flower-boy.jpg", 
                        albumName:"Flower Boy",
                        color: "", 
                        albumArtist: "Tyler, the Creator", 
                        albumDesc:"At first I didn't understand why everyone was talking about Tyler, the Creator, until the comments under Tatsuro Yamashita's Fragile said that he sampled the song. I'm glad I gave him a chance, he's awesome."
                    },
                    {
                        id:154, 
                        albumSrc:"https://upload.wikimedia.org/wikipedia/en/3/35/The_Eminem_Show.jpg", 
                        albumName:"The Eminem Show",
                        color: "", 
                        albumArtist: "Eminem", 
                        albumDesc:"Edgeworth vibes."
                    },
                    {
                        id:161, 
                        albumSrc:"https://e.snmc.io/i/1200/s/9ddde11c30e7b108d826fff244b2a0f4/7047246", 
                        albumName:"IM",
                        color: "", 
                        albumArtist: "Indigo Music", 
                        albumDesc:"Cool album, makes me feel hyped."
                    },
                    {
                        id:156, 
                        albumSrc:"https://cdn.albumoftheyear.org/album/360495-life-is-bitch.jpg", 
                        albumName:"Life is a Bi...",
                        color: "", 
                        albumArtist: "BIBI", 
                        albumDesc:"BIBI for life."
                    },
                ],
                [
                    {
                        id:157, 
                        albumSrc:"https://e.snmc.io/i/600/s/93cdec31c1bb9b5d1717e5c9b8c21024/9279307/lil-nas-x-montero-Cover-Art.jpg", 
                        albumName:"MONTERO",
                        color: "", 
                        albumArtist: "Lil Nas X", 
                        albumDesc:"This album grew on me."
                    },
                    {
                        id:158, 
                        albumSrc:"https://cdn.albumoftheyear.org/album/178436-no-open-flames.jpg", 
                        albumName:"No Open Flames",
                        color: "", 
                        albumArtist: "Simon Dominic", 
                        albumDesc:"Ayayayyaayyayaa"
                    },
                    {
                        id:160, 
                        albumSrc:"https://i.scdn.co/image/ab67616d0000b2734b378770cd6b77e86f8a6288", 
                        albumName:"Worldwide",
                        color: "", 
                        albumArtist: "Jay Park", 
                        albumDesc:"My first encounter with Jay Park was unknowingly when I listened to 2pm. Then it was MOMMAE and the MV was too sacrilegious to look at. I think I had a small Jay Park phase cuz I had two of his albums."
                    },
                    // {
                    //     id:161, 
                    //     albumSrc:"https://e.snmc.io/i/1200/s/9ddde11c30e7b108d826fff244b2a0f4/7047246", 
                    //     albumName:"IM",
                    //     color: "", 
                    //     albumArtist: "Indigo Music", 
                    //     albumDesc:"Slaps hard. I keep returning to it if I need to feel hyped."
                    // },
                    {
                        id:162, 
                        albumSrc:"https://cdn.albumoftheyear.org/album/238424-u-n-u-part-1.jpg", 
                        albumName:"u n u, Pt. 1",
                        color: "", 
                        albumArtist: "nafla", 
                        albumDesc:"I have to admit that I initially listened to this because the album cover intrigued me."
                    },
                    {
                        id:163, 
                        albumSrc:"https://cdn.albumoftheyear.org/album/220985-is-anybody-out-there.jpg", 
                        albumName:"IS ANYBODY OUT THERE?",
                        color: "", 
                        albumArtist: "DPR LIVE", 
                        albumDesc:"The DPR group is really outstanding. I really admire their dediction to music and their music videos in general. I support completely."
                    },
                ],
                // Jazz (General) (26-27)
                [
                    {
                        id:176, 
                        albumSrc:"https://e.snmc.io/i/1200/s/dc07951189e6126891e3b573c808484d/1748041", 
                        albumName:"Ella in Berlin: Mack in the Knife",
                        color: "#fff", 
                        albumArtist: "Ella Fitzgerald", 
                        albumDesc:"Since I was super young I've always been in love with Jazz. Usually I never remember the stations for specific genres, but I always knew the Jazz Channel. Ella Fitzgerald and Louis Armstrong were the artists I could listen to on repeat and love it every single time."
                    },
                    {
                        id:177, 
                        albumSrc:"https://e.snmc.io/i/1200/s/7fd70c297122bd5c747d4efddd2c8464/5303329", 
                        albumName:"Funky Stuff",
                        color: "#fff", 
                        albumArtist: "JIRO INAGAKI & SOUL MEDIA", 
                        albumDesc:"Accurate album title."
                    },
                    {
                        id:178, 
                        albumSrc:"https://upload.wikimedia.org/wikipedia/en/thumb/3/38/No_Problem_%28Chet_Baker_album%29.jpg/220px-No_Problem_%28Chet_Baker_album%29.jpg", 
                        albumName:"No Problem",
                        color: "#fff", 
                        albumArtist: "Chet Baker Quartet", 
                        albumDesc:"Dudududududuuuuu du du du duuuuuuuu"
                    },
                    {
                        id:179, 
                        albumSrc:"https://upload.wikimedia.org/wikipedia/en/8/82/Bill_Evans_Trio_Portraits_in_Jazz.jpg", 
                        albumName:"Portrait in Jazz",
                        color: "#fff", 
                        albumArtist: "Bill Evans", 
                        albumDesc:"I love this album. Bill Evans is great. I am obsessed with Jazz Piano and particularly the way Bill Evans plays >:3."
                    },
                    {
                        id:180, 
                        albumSrc:"https://upload.wikimedia.org/wikipedia/en/0/05/Yussefkamaalblackfocus.png", 
                        albumName:"Black Focus",
                        color: "#fff", 
                        albumArtist: "Yussef Kamaal", 
                        albumDesc:"So jazzy, so smooth, so fresh, so (as they say in classical music youtube comments) sublime."
                    },
                    {
                        id:156, 
                        albumSrc:"https://i.scdn.co/image/ab67616d0000b2734df08b0208be58213569b740", 
                        albumName:"Stone Flower",
                        color: "#fff", 
                        albumArtist: "ANTÔNIO CARLOS JOBIM", 
                        albumDesc:"I call this the legendary secretly-recommended-to-everyone jazz album of Youtube that I'm fine was gifted to me by the algorithm. This is what the algorithm was destined to be for. Stone Flower."
                    },
                ],
                [
                    {
                        id:157, 
                        albumSrc:"https://upload.wikimedia.org/wikipedia/en/9/9c/MilesDavisKindofBlue.jpg", 
                        albumName:"Kind of Blue",
                        color: "#fff", 
                        albumArtist: "Miles Davis", 
                        albumDesc:"Classic jazz album. Miles Davis is senpai. The record costs too much money."
                    },
                    {
                        id:158, 
                        albumSrc:"https://upload.wikimedia.org/wikipedia/en/thumb/b/b1/Various_Artists_-_Jazz_for_a_Rainy_Afternoon_Cover.jpg/220px-Various_Artists_-_Jazz_for_a_Rainy_Afternoon_Cover.jpg", 
                        albumName:"Jazz for a Rainy Afternoon",
                        color: "#fff", 
                        albumArtist: "Various Artists", 
                        albumDesc:"I could sing to you the entire album."
                    },
                    {
                        id:160, 
                        albumSrc:"https://upload.wikimedia.org/wikipedia/en/e/ed/Monks_Dream_by_Thelonious.jpg", 
                        albumName:"Monk's Dream",
                        color: "", 
                        albumArtist: "Thelonius Monk", 
                        albumDesc:"When I think of music I think of food (and smells and colours sometimes). Thelonious Monk is jellybeans (which include cheese and potato flavours)."
                    },
                    {
                        id:161, 
                        albumSrc:"https://upload.wikimedia.org/wikipedia/en/c/cb/Moanin%27_%28Art_Blakey%29.jpg", 
                        albumName:"Moanin'",
                        color: "#fff", 
                        albumArtist: "ART BLAKEY AND THE JAZZ MESSENGERS", 
                        albumDesc:"This doesn't have to do with the album, but Leo P's solo in Moanin' is legendary."
                    },
                    {
                        id:162, 
                        albumSrc:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe5Z14bIAOo4QOWysJIPTa5KmyQ2CPr7BiwNlyUkE2YM0dOnmaD7z5N_uu0orHe-wsx1I&usqp=CAU", 
                        albumName:"My Favourite Tune",
                        color: "#fff", 
                        albumArtist: "Ryo Fukui", 
                        albumDesc:"Yessir"
                    },
                    {
                        id:163, 
                        albumSrc:"https://cdn2.albumoftheyear.org/250x/album/471038-gyakuten-meets-jazz-soul.jpg", 
                        albumName:"Gyakuten Meets Jazz Soul",
                        color: "#fff", 
                        albumArtist: "METAMORPHOSIS JAZZ BAND, NORIYUKI IWADARE", 
                        albumDesc:"I found this before I even knew what Ace Attorney was and I thought it was just a random album. Now I can update my autopsy report like a classy man."
                    }
                ],
                // Jazz (Experimental) (28-29)
                [
                    {
                        id:151, 
                        albumSrc:"https://i1.sndcdn.com/artworks-000168596680-4nln0x-t500x500.jpg", 
                        albumName:"Mobile Suit Gundam Thunderbolt",
                        color: "#000", 
                        bgColor: "#fff",
                        albumArtist: "Naruyoshi Kikuchi", 
                        albumDesc:"Crazy and all over the place."
                    },
                    {
                        id:152, 
                        albumSrc:"http://static1.squarespace.com/static/5eba6da74635d50f359b23da/5eba6e75b9b26c76303ab821/61014715d6d36c590d7e40cd/1627689657286/zujago_blog_post_thumbnail.jpg?format=1500w", 
                        albumName:"The Players with Hiromasa Suzuki",
                        color: "#000",
                        bgColor: "#fff", 
                        albumArtist: "Galaxy", 
                        albumDesc:"Fusion from 1979, smooth and funky and reminiscent of trees."
                    },
                    {
                        id:153, 
                        albumSrc:"https://lastfm.freetls.fastly.net/i/u/ar0/8d478c38ca8a4a389e9513be50ed7d3e.jpg", 
                        albumName:"Sunset",
                        color: "#000", 
                        bgColor: "#fff",
                        albumArtist: "Yuji Ohno", 
                        albumDesc:"Epic, feels like you're in space, composed by the same person who created the Lupin the Third soundtrack."
                    },
                    {
                        id:154, 
                        albumSrc:"https://i.discogs.com/t1YQMu44dcuUruf6YxoggV9CxBzmPHkX-iQtY84ySkM/rs:fit/g:sm/q:90/h:587/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTgyMTIw/MDktMTQ1NzIyOTEz/NC0xNDM4LmpwZWc.jpeg", 
                        albumName:"Stone Alliance",
                        color: "#000", 
                        bgColor: "#fff",
                        albumArtist: "Con Amigos", 
                        albumDesc:"Afro-Cuban jazz, I've only recently found this album but I already love it ."
                    },
                    {
                        id:155, 
                        albumSrc:"https://e.snmc.io/i/1200/s/0e7b5c58603200149c44dccc2362911e/9408051", 
                        albumName:"Sweet Magic",
                        color: "#000",
                        bgColor: "#fff",
                        albumArtist: "Malta", 
                        albumDesc:"Smooth nights."
                    },
                    {
                        id:156, 
                        albumSrc:"https://i.discogs.com/5DRsp9qbJPxV0f7fYoNlgKkS6lnHWhTHyalGLOz_ZdE/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTYwMTk4/OC0xNjExMTMyODgy/LTM2MzkuanBlZw.jpeg", 
                        albumName:"Juice",
                        color: "#000", 
                        bgColor: "#fff",
                        albumArtist: "Ryo Kawasaki", 
                        albumDesc:"Hey Google, please play that one Japanese jazz-fusion album with the cut up machine orange"
                    }
                ],
                [
                    {
                        id:176, 
                        albumSrc:"https://cdn2.albumoftheyear.org/500x/album/166251-recently-1.jpg", 
                        albumName:"Recently",
                        color: "#e2b900", 
                        albumArtist: "Liana Flores", 
                        albumDesc:"Folk pop, wow this is so pretty-pop"
                    },
                    {
                        id:177, 
                        albumSrc:"https://e.snmc.io/i/600/s/23a4958b809d807a906be82813d0d8dd/8542038/%E9%9D%92%E8%91%89%E5%B8%82%E5%AD%90-ichiko-aoba-0-Cover-Art.jpg", 
                        albumName:"0",
                        color: "#ffcccc", 
                        albumArtist: "Ichiko Aoba", 
                        albumDesc:"Enchanting, beautiful. I love her singing, just the way her songs sound, it's kind of hard to describe why I'm obsessed with this. Surprisingly, it also reminds me of something I actually did listen to a long time ago, though I don't remember what it is anymore."
                    },
                    {
                        id:178, 
                        albumSrc:"https://i.scdn.co/image/ab67616d0000b27393a1519118102a6d78164713", 
                        albumName:"This Empty Northern Hemisphere",
                        color: "#27005e", 
                        albumArtist: "Gregory Alan Isakov", 
                        albumDesc:"I'm so grateful that I found this album."
                    },
                    {
                        id:179, 
                        albumSrc:"https://cdn.albumoftheyear.org/album/390591-hitotema.jpg", 
                        albumName:"hitotema",
                        color: "#fcf3b3", 
                        albumArtist: "Paniyolo", 
                        albumDesc:"This album is soft. I feel like I've heard this long time ago, even though I only discovered around the time I was in grade 6. There's this warm feeling I hear whenever I listen to this album."
                    },
                    {
                        id:180, 
                        albumSrc:"https://upload.wikimedia.org/wikipedia/en/8/83/In_the_aeroplane_over_the_sea_album_cover_copy.jpg", 
                        albumName:"In the Aeroplane Over the Sea",
                        color: "#91c2c0", 
                        albumArtist: "Neutral Milk Hotel", 
                        albumDesc:"I remember that I kept seeing this album being recommended everywhere (especially on Reddit) so I finally decided to listen to this. All I have to say is I LOVE YOU JESUUUuUUS CHRISIISTISTST"
                    }
                ],
                // Electronic (30-31)
                [
                    {
                        id:164, 
                        albumSrc:"https://upload.wikimedia.org/wikipedia/en/5/56/ModalMusic.jpg", 
                        albumName:"Modal Soul",
                        color: "#FF10F0", 
                        albumArtist: "Nujabes", 
                        albumDesc:"I first found Nujabes through Cowboy Bebop, and I instantly was in love with all of his music. It reminded me of the kind of lounge music my mom would always have on her ipod that I listened to nonstop."
                    },
                    {
                        id:165, 
                        albumSrc:"https://cdn.albumoftheyear.org/album/190257-ylang-ylang.jpg", 
                        albumName:"Ylang Ylang",
                        color: "#FF10F0", 
                        albumArtist: "FKJ", 
                        albumDesc:"This is the other album that describes my future as it goes along."
                    },
                    {
                        id:166, 
                        albumSrc:"https://e.snmc.io/i/600/s/c4cb3ad01129a1a83f1ead912542da5a/8187170/%E3%81%BF%E3%81%8B%E3%82%93%E6%B1%81-mikanzil-4th-peace-Cover-Art.jpg", 
                        albumName:"4th-peace",
                        color: "#FF10F0", 
                        albumArtist: "mikanzil", 
                        albumDesc:"The word that I think of in this album is EXPLOSION of like a bunch of party poppers."
                    },
                    {
                        id:167, 
                        albumSrc:"https://e.snmc.io/i/600/s/61d47a54f97aac9166825eaae4167852/7574451/snails-house-ordinary-songs-2-Cover-Art.jpg", 
                        albumName:"Ordinary Songs 2",
                        color: "#FF10F0", 
                        albumArtist: "Snail's House", 
                        albumDesc:"Whenever I think of Snail's House I think of Warm Milk (both the song and the actual taste) and being at my grandparents' away from my parents. So comfy."
                    },
                    {
                        id:168, 
                        albumSrc:"https://f4.bcbits.com/img/a1306388424_10.jpg", 
                        albumName:"Ivy League",
                        color: "#FF10F0", 
                        albumArtist: "potsu", 
                        albumDesc:"I feel a futuristic cold breeze bright hot chocolate apple smooth feel about this."
                    },
                    {
                        id:169, 
                        albumSrc:"https://cdn2.albumoftheyear.org/250x/album/116714-moe-moe.jpg", 
                        albumName:"Moe Moe",
                        color: "#FF10F0", 
                        albumArtist: "Moe Shop", 
                        albumDesc:"Ne senpai, notice me."
                    },
                ],
                [
                    {
                        id:170, 
                        albumSrc:"https://e.snmc.io/i/600/w/7a6bb5000577dbc8f04dfa9cc8eebb91/8864200/sweet-trip-velocity-design-comfort-Cover-Art.png", 
                        albumName:"Velocity : Design : Comfort.",
                        color: "#FF10F0", 
                        albumArtist: "Sweet Trip", 
                        albumDesc:"I don't remember how I found this album, but it was amazing. I found it again when a really cool friend showed it to me again."
                    },
                    {
                        id:171, 
                        albumSrc:"https://upload.wikimedia.org/wikipedia/en/thumb/a/a5/2814_-_Birth_of_a_new_day.jpeg/220px-2814_-_Birth_of_a_new_day.jpeg", 
                        albumName:"２８１４",
                        color: "#FF10F0", 
                        albumArtist: "Birth of a New Day (新しい日の誕生)", 
                        albumDesc:"This is what I think of when I think of vaporwave."
                    },
                    {
                        id:172, 
                        albumSrc:"https://i1.sndcdn.com/artworks-tBvpyXoIChPp44zG-Vfm15A-t500x500.jpg", 
                        albumName:"Mood Provider 5",
                        color: "#FF10F0", 
                        albumArtist: "Flamingosis", 
                        albumDesc:"This really provides a mood."
                    },
                    {
                        id:173, 
                        albumSrc:"https://e.snmc.io/i/1200/s/37c1c5186e8edbf2e3f5e48fc2efac95/7432143", 
                        albumName:"プリオシンの浜辺",
                        color: "#FF10F0", 
                        albumArtist: "Kenichiro Isoda", 
                        albumDesc:"Apparently 'Ambient' is a subgenre of Electronica so here we go."
                    },
                    {
                        id:174, 
                        albumSrc:"https://e.snmc.io/i/600/s/ec1b3d842465c9ae75b48806eaefb64c/8335931/macroblank-%E8%82%89%E3%81%A8%E9%AD%82-ep-Cover-Art.jpg", 
                        albumName:"肉と魂",
                        color: "#FF10F0", 
                        albumArtist: "macroblank", 
                        albumDesc:"Apparently this is barbercore or barberbeats and that's honestly so sick."
                    },
                    {
                        id:175, 
                        albumSrc:"https://i.scdn.co/image/ab67616d0000b273a0f37c240e20efec57e62d9a", 
                        albumName:"LUPIN THE THIRD JAM (THIRD REMIX)",
                        color: "#FF10F0", 
                        albumArtist: "LUPIN THE THIRD JAM CREW", 
                        albumDesc:"I loved the Lupin Soundtrack already, so when my friend hit me with this I was very happy."
                    },
                ],
                // Folk (32-33)
                [
                    {
                        id:176, 
                        albumSrc:"https://cdn2.albumoftheyear.org/500x/album/166251-recently-1.jpg", 
                        albumName:"Recently",
                        color: "#e2b900", 
                        albumArtist: "Liana Flores", 
                        albumDesc:"Folk pop, wow this is so pretty-pop"
                    },
                    {
                        id:177, 
                        albumSrc:"https://e.snmc.io/i/600/s/23a4958b809d807a906be82813d0d8dd/8542038/%E9%9D%92%E8%91%89%E5%B8%82%E5%AD%90-ichiko-aoba-0-Cover-Art.jpg", 
                        albumName:"0",
                        color: "#ffcccc", 
                        albumArtist: "Ichiko Aoba", 
                        albumDesc:"Enchanting, beautiful. I love her singing, just the way her songs sound, it's kind of hard to describe why I'm obsessed with this. Surprisingly, it also reminds me of something I actually did listen to a long time ago, though I don't remember what it is anymore."
                    },
                    {
                        id:178, 
                        albumSrc:"https://i.scdn.co/image/ab67616d0000b27393a1519118102a6d78164713", 
                        albumName:"This Empty Northern Hemisphere",
                        color: "#27005e", 
                        albumArtist: "Gregory Alan Isakov", 
                        albumDesc:"I'm so grateful that I found this album."
                    },
                    {
                        id:179, 
                        albumSrc:"https://cdn.albumoftheyear.org/album/390591-hitotema.jpg", 
                        albumName:"hitotema",
                        color: "#fcf3b3", 
                        albumArtist: "Paniyolo", 
                        albumDesc:"This album is soft. I feel like I've heard this long time ago, even though I only discovered around the time I was in grade 6. There's this warm feeling I hear whenever I listen to this album."
                    },
                    {
                        id:180, 
                        albumSrc:"https://upload.wikimedia.org/wikipedia/en/8/83/In_the_aeroplane_over_the_sea_album_cover_copy.jpg", 
                        albumName:"In the Aeroplane Over the Sea",
                        color: "#91c2c0", 
                        albumArtist: "Neutral Milk Hotel", 
                        albumDesc:"I remember that I kept seeing this album being recommended everywhere (especially on Reddit) so I finally decided to listen to this. All I have to say is I LOVE YOU JESUUUuUUS CHRISIISTISTST"
                    }
                ],
                [
                    {
                        id:176, 
                        albumSrc:"https://cdn2.albumoftheyear.org/500x/album/166251-recently-1.jpg", 
                        albumName:"Recently",
                        color: "#e2b900", 
                        albumArtist: "Liana Flores", 
                        albumDesc:"Folk pop, wow this is so pretty-pop"
                    },
                    {
                        id:177, 
                        albumSrc:"https://e.snmc.io/i/600/s/23a4958b809d807a906be82813d0d8dd/8542038/%E9%9D%92%E8%91%89%E5%B8%82%E5%AD%90-ichiko-aoba-0-Cover-Art.jpg", 
                        albumName:"0",
                        color: "#ffcccc", 
                        albumArtist: "Ichiko Aoba", 
                        albumDesc:"Enchanting, beautiful. I love her singing, just the way her songs sound, it's kind of hard to describe why I'm obsessed with this. Surprisingly, it also reminds me of something I actually did listen to a long time ago, though I don't remember what it is anymore."
                    },
                    {
                        id:178, 
                        albumSrc:"https://i.scdn.co/image/ab67616d0000b27393a1519118102a6d78164713", 
                        albumName:"This Empty Northern Hemisphere",
                        color: "#27005e", 
                        albumArtist: "Gregory Alan Isakov", 
                        albumDesc:"I'm so grateful that I found this album."
                    },
                    {
                        id:179, 
                        albumSrc:"https://cdn.albumoftheyear.org/album/390591-hitotema.jpg", 
                        albumName:"hitotema",
                        color: "#fcf3b3", 
                        albumArtist: "Paniyolo", 
                        albumDesc:"This album is soft. I feel like I've heard this long time ago, even though I only discovered around the time I was in grade 6. There's this warm feeling I hear whenever I listen to this album."
                    },
                    {
                        id:180, 
                        albumSrc:"https://upload.wikimedia.org/wikipedia/en/8/83/In_the_aeroplane_over_the_sea_album_cover_copy.jpg", 
                        albumName:"In the Aeroplane Over the Sea",
                        color: "#91c2c0", 
                        albumArtist: "Neutral Milk Hotel", 
                        albumDesc:"I remember that I kept seeing this album being recommended everywhere (especially on Reddit) so I finally decided to listen to this. All I have to say is I LOVE YOU JESUUUuUUS CHRISIISTISTST"
                    }
                ],
            ]
        }
    }

    // Methods 
    listAlbums = (listItem) => {
        return <div className="gridAlbums" key={listItem.id}>
            <Albums
                key={listItem.id}
                albumSrc={listItem.albumSrc}
                albumName={listItem.albumName}
                albumArtist={listItem.albumArtist}
                albumDesc={listItem.albumDesc}
                color={listItem.color}
                bgColor={listItem.bgColor}
            />
        </div>
    }
    
    render() {
        return(
            // Return JSX
            <div className="app">
                <StyledHeader>
                    <p>Jump to</p>
                    <a href={'#random'}>Random</a>
                    <a href={'#citypop'}>Citypop</a>
                    <a href={'#poprock'}>PopRock</a>
                    <a href={'#mathrock'}>MathRock</a>
                    <a href={'#metal'}>Metal</a>
                    <a href={'#classical'}>Classical</a>
                    <a href={'#pop'}>Pop</a>
                    <a href={'#kpop'}>Kpop</a>                    
                    <a href={'#kindie'}>K-Indie</a>
                    <a href={'#indierock'}>IndieRock</a>
                    <a href={'#randb'}>R&B</a>
                    <a href={'#krandb'}>K-R&B</a>
                    <a href={'#hiphop'}>Hip Hop</a>
                    <a href={'#jazzgen'}>JazzGen</a>
                    <a href={'#jazzexp'}>JazzExp</a>
                    <a href={'#electronic'}>Electronic</a>
                    <a href={'#folk'}>Folk</a>
                </StyledHeader>

                <h1>Favourite Albums</h1>

                {/* Random */}
                <Section id="random" backgroundColor="#212120" artistColor="yellow">
                    <Genre 
                        genreName="Random" 
                        genreDescriptionTitle="Get a taste of my taste of music! "
                        genreDescription="The albums in this section will give a good idea of the different kinds of things I like listening to :D A bit of everything, but also not really, it takes me too long to find the perfect albums to represent my 'music map' as you could call it. I think the only one definitive trait that sums up my entire listening experience is that nothing I listen to is sad (most of the time)! I gotta be happy or live the angsty emo fantasy, there are no in-betweens. Music, for me and for most people, is something that brings the ✨ colour ✨ into life. Music makes me feel alive."
                        imageSource="https://gifdb.com/images/thumbnail/flying-birds-above-the-sea-anime-aesthetic-57jj9md4i2o4d3ey.gif"
                        ></Genre>
                    <Container>{this.state.albumValues[0].map(this.listAlbums)}</Container>
                    <ImageContainer>
                        <img src={"https://media.tenor.com/G6CaI-iHKnEAAAAC/accension-god.gif"}></img>
                        <img src={"https://thumbs.gfycat.com/AcceptableFeminineBluetonguelizard-size_restricted.gif"}></img>
                    </ImageContainer>
                    <Container>{this.state.albumValues[1].map(this.listAlbums)}</Container>
                </Section>

                {/* Citypop */}
                <Section id="citypop" backgroundColor="#428CFF" artistColor="#ffd9f7">
                    <Genre genreName="Citypop"/>
                    <Container>{this.state.albumValues[2].map(this.listAlbums)}</Container>
                    <Container>{this.state.albumValues[3].map(this.listAlbums)}</Container>
                </Section>

                {/* Pop Rock */}
                <Section id="poprock" backgroundColor="#3e593f" artistColor="#ffd9f7">
                    <Genre genreName="Pop Rock (Or Punk)"/>
                    <Container>{this.state.albumValues[4].map(this.listAlbums)}</Container>
                    <Container>{this.state.albumValues[5].map(this.listAlbums)}</Container>
                </Section>

                {/* Math Rock */}
                <Section id="mathrock" backgroundColor="#3557a1" artistColor="#4824b3">
                    <Genre genreName="Math Rock"/>
                    <Container>{this.state.albumValues[6].map(this.listAlbums)}</Container>
                    <Container>{this.state.albumValues[7].map(this.listAlbums)}</Container>
                </Section>

                {/* Metal */}
                <Section id="metal" backgroundColor="#000" artistColor="#525b5e">
                    <Genre genreName="Metal"/>
                    <Container>{this.state.albumValues[8].map(this.listAlbums)}</Container>
                    {/* <Container>{this.state.albumValues[9].map(this.listAlbums)}</Container> */}
                </Section>

                {/* Classical */}
                <Section id="classical" backgroundColor="#7DAF9C" artistColor="#946056">
                    <Genre genreName="Classical"/>
                    <Container>{this.state.albumValues[10].map(this.listAlbums)}</Container>
                    <Container>{this.state.albumValues[11].map(this.listAlbums)}</Container>
                </Section>

                {/* Pop */}
                <Section id="pop" backgroundColor="#c255b0" artistColor="#fcba03">
                    <Genre genreName="Pop"/>
                    <Container>{this.state.albumValues[12].map(this.listAlbums)}</Container>
                    {/* <Container>{this.state.albumValues[13].map(this.listAlbums)}</Container> */}
                </Section>

                {/* K-pop */}
                <Section id="kpop" backgroundColor="#01023b" artistColor="#00fc48">
                    <Genre genreName="K-Pop"/>
                    <Container>{this.state.albumValues[14].map(this.listAlbums)}</Container>
                    <Container>{this.state.albumValues[15].map(this.listAlbums)}</Container>
                </Section>

                {/* K-Indie */}
                <Section id="kindie" backgroundColor="#777878" artistColor="">
                    <Genre genreName="K-Indie"/>
                    <Container>{this.state.albumValues[16].map(this.listAlbums)}</Container>
                    <Container>{this.state.albumValues[17].map(this.listAlbums)}</Container>
                </Section>

                {/* Indie rock */}
                <Section id="indierock" backgroundColor="#0000FF" artistColor="#777878">
                    <Genre genreName="Indie Rock"/>
                    <Container>{this.state.albumValues[18].map(this.listAlbums)}</Container>
                    {/* <Container>{this.state.albumValues[19].map(this.listAlbums)}</Container> */}
                </Section>

                {/* R&B (Or Soul) */}
                <Section id="randb" backgroundColor="#4a412a" artistColor="#695656">
                    <Genre genreName="R&B (Or Soul)"/>
                    <Container>{this.state.albumValues[20].map(this.listAlbums)}</Container>
                    <Container>{this.state.albumValues[21].map(this.listAlbums)}</Container>
                </Section>

                {/* KR&B */}
                <Section id="krandb" backgroundColor="#800080" artistColor="#fcef00">
                    <Genre genreName="KR&B"/>
                    <Container>{this.state.albumValues[22].map(this.listAlbums)}</Container>
                    <Container>{this.state.albumValues[23].map(this.listAlbums)}</Container>
                </Section>

                {/* Hip Hop */}
                <Section id="hiphop" backgroundColor="#FFFF00" artistColor="#000">
                    <Genre genreName="Hip Hop"/>
                    <Container>{this.state.albumValues[24].map(this.listAlbums)}</Container>
                    <Container>{this.state.albumValues[25].map(this.listAlbums)}</Container>
                </Section>

                 {/* Jazz (General) */}
                 <Section id="jazzgen" backgroundColor="#660801" artistColor="#fcba03">
                    <Genre genreName="Jazz (General)"/>
                    <Container>{this.state.albumValues[26].map(this.listAlbums)}</Container>
                    <Container>{this.state.albumValues[27].map(this.listAlbums)}</Container>
                </Section>

                 {/* Jazz (Experential) */}
                 <Section id="jazzexp" backgroundColor="#FA7E4A" artistColor="#FAB81D">
                    <Genre genreName="Jazz (Experimental)"/>
                    <Container>{this.state.albumValues[28].map(this.listAlbums)}</Container>
                    {/* <Container>{this.state.albumValues[29].map(this.listAlbums)}</Container> */}
                </Section>

                {/* Electronic */}
                <Section id="electronic" backgroundColor="#000" artistColor="#ff8ff8">
                    <Genre genreName="Electronic"/>
                    <Container>{this.state.albumValues[30].map(this.listAlbums)}</Container>
                    <Container>{this.state.albumValues[31].map(this.listAlbums)}</Container>
                </Section>

                {/* Folk */}
                <Section id="folk" backgroundColor="#634d3e" artistColor="#7993bf">
                    <Genre genreName="Folk"/>
                    <Container>{this.state.albumValues[32].map(this.listAlbums)}</Container>
                    {/* <Container>{this.state.albumValues[33].map(this.listAlbums)}</Container> */}
                </Section>
            </div>
        )
    }
}

export default Main;
