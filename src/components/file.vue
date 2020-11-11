<template>
    <div class="file">
        <div
            class="border border-recto-dark card relative hover:border-recto-light hover:shadow-lg cursor-pointer"
        >
            <img
                class="object-cover h-full opacity-50"
                :src="fileImage"
                :alt="file.name"
            />
            <ul class="file-data">
                <li>{{ file.name }}</li>
                <li>{{ file.id }}</li>
                <li>{{ file.stateCountry }}</li>
            </ul>
            <ul class="file-status">
                <li
                    class="peligroso w-4 h-4 rounded-full block bg-red-500 mb-1"
                    v-if="file.peligroso"
                ></li>
                <li
                    class="byc w-4 h-4 rounded-full block bg-orange-500 mb-1"
                    v-if="file.byc"
                ></li>
                <li
                    class="embargado w-4 h-4 rounded-full block bg-white mb-1"
                    v-if="file.embargado"
                ></li>
                <li
                    class="lspd w-4 h-4 rounded-full block bg-blue-500"
                    v-if="file.lspd"
                ></li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    name: "file",
    props: {
        file: {
            type: Object,
            required: true
        }
    },
    computed: {
        fileImage: function() {
            return (
                this.file.photo ||
                require("../assets/images/file_bg_pattern.png")
            );
        }
    }
};
</script>

<style lang="scss">
.card {
    .file-data {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        background-color: rgba(22, 18, 51, 0.8);
        padding: 5px;
        li {
            border: none;
            display: block;
            line-height: 1.2rem;
        }
    }
    .file-status {
        position: absolute;
        top: 0;
        left: 0;
        padding: 5px;
    }
    height: 250px;
}
</style>
