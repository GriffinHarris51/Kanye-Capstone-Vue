<template>
  <div class="h-screen max-h-screen w-screen bg-wave-cream overflow-hidden">
    <div class="max-w-3xl mx-auto">
      <h1 class="flex justify-center items-center mt-6 text-4xl text-mauve">KANYE ALBUMS</h1>
      <div class="w-full flex flex-row justify-center mt-6">
        <div v-for="(img, index) in albumImages" :key="index" class="relative">
          <img
            class="sm:image-size image-size shadow-2xl rounded blur z-10"
            v-if="selected === img.id"
            :alt="img.title"
            :src="getImgUrl(img.path)"
          />
          <div
            class="absolute top-0 h-full flex flex-col items-center justify-between text-wrapper"
            v-if="selected === img.id"
          >
            <div>
              <h1 class="mt-4 ml-4 items-center">{{ img.title }}</h1>
            </div>
            <div class="w-full flex flex-row justify-between">
              <div>
                <a :href="img.itunesLink" target="_blank">
                  <h1 class="ml-4 hover:text-mauve-green">APPLE MUSIC</h1>
                </a>
              </div>
              <div>
                <a :href="img.spotifyLink" target="_blank">
                  <h1 class="mr-4 hover:text-mauve-green">SPOTIFY</h1>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-row items-center justify-between">
        <button
          @click="handleDecrement()"
          class="bg-mauve text-mauve-green hover:bg-mauve-green hover:text-mauve button-transform focus:outline-none p-2 rounded-full cursor-pointer mt-4 ml-4"
        >Prev Album</button>
        <button
          @click="handleIncrement()"
          class="bg-mauve text-mauve-green hover:bg-mauve-green hover:text-mauve button-transform focus:outline-none p-2 rounded-full mx-2 cursor-pointer mt-4 mr-4"
        >Next Album</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: 1,
      albumImages: [
        {
          id: 1,
          title: "My Beautiful Dark Twisted Fantasy",
          path: "download.jpg",
          spotifyLink: "https://open.spotify.com/album/20r762YmB5HeofjMCiPMLv",
          itunesLink:
            "https://music.apple.com/us/album/my-beautiful-dark-twisted-fantasy-deluxe-edition/1440621197"
        },
        {
          id: 2,
          title: "Watch the Throne",
          path: "download-1.jpg",
          spotifyLink: "https://open.spotify.com/album/1YwzJz7CrV9fd9Qeb6oo1d",
          itunesLink:
            "https://music.apple.com/us/album/watch-the-throne-deluxe/1440845249"
        },
        {
          id: 3,
          title: "Yeezus",
          path: "download-2.jpg",
          spotifyLink: "https://open.spotify.com/album/7D2NdGvBHIavgLhmcwhluK",
          itunesLink: "https://music.apple.com/us/album/yeezus/1440873068"
        },
        {
          id: 4,
          title: "808s and heartbreak",
          path: "download-3.jpg",
          spotifyLink: "https://open.spotify.com/album/3WFTGIO6E3Xh4paEOBY9OU",
          itunesLink:
            "https://music.apple.com/us/album/808s-heartbreak/1441410287"
        },
        {
          id: 5,
          title: "Life of Pablo",
          path: "download-4.jpg",
          spotifyLink: "https://open.spotify.com/album/7gsWAHLeT0w7es6FofOXk1",
          itunesLink:
            "https://music.apple.com/us/album/the-life-of-pablo/1443063578"
        },
        {
          id: 6,
          title: "Kids see Ghosts",
          path: "download-5.jpg",
          spotifyLink: "https://open.spotify.com/album/6pwuKxMUkNg673KETsXPUV",
          itunesLink:
            "https://music.apple.com/us/album/kids-see-ghosts/1396710872"
        },
        {
          id: 7,
          title: "Cruel Summer",
          path: "download-6.jpg",
          spotifyLink: "https://open.spotify.com/album/0bcOGgwJpwBjfFBTApoqSn",
          itunesLink:
            "https://music.apple.com/us/album/kanye-west-presents-good-music-cruel-summer/1440829853"
        },
        {
          id: 8,
          title: "Graduation",
          path: "download-7.jpg",
          spotifyLink: "https://open.spotify.com/album/5fPglEDz9YEwRgbLRvhCZy",
          itunesLink: "https://music.apple.com/us/album/graduation/1440765161"
        },
        {
          id: 9,
          title: "Late Registration",
          path: "download-8.jpg",
          spotifyLink: "https://open.spotify.com/album/5ll74bqtkcXlKE7wwkMq4g",
          itunesLink:
            "https://music.apple.com/us/album/late-registration/1440668749"
        },
        {
          id: 10,
          title: "College Dropout",
          path: "download-9.jpg",
          spotifyLink: "https://open.spotify.com/album/4Uv86qWpGTxf7fU7lG5X6F",
          itunesLink:
            "https://music.apple.com/us/album/the-college-dropout/1412872568"
        },
        {
          id: 11,
          title: "Ye",
          path: "download-10.jpg",
          spotifyLink: "https://open.spotify.com/album/2Ek1q2haOnxVqhvVKqMvJe",
          itunesLink: "https://music.apple.com/us/album/ye/1441456689"
        }
      ]
    };
  },
  methods: {
    handleDecrement() {
      if (this.selected <= 1) {
        this.selected = 1;
      } else {
        this.selected--;
      }
    },
    handleIncrement() {
      if (this.selected === 11) {
        this.selected = 11;
      } else {
        this.selected++;
      }
    },
    getImgUrl(pic) {
      return require("@/assets/album-images/" + pic);
    }
  }
};
</script>

<style lang="scss">
.music-nav {
  background-color: #493f41;
}

.image-size {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 500px;
  width: 500px;
}
.text-wrapper {
  color: transparent;
  height: 500px;
  width: 500px;
}

.text-wrapper:hover {
  @apply text-white font-extrabold text-4xl;
  transition: all 1s ease-in-out;
  background-color: black;
  opacity: 0.6;
}

.blur:hover {
  transition: all 1s ease-in-out;
  filter: brightness(10%);
}

.button-transform {
  transition: 0.25s ease-in-out;
}
</style>