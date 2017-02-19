<template>
    <img :src="avatar_url" :data-id="username" @click='toUserCenter(username)'>
</template>

<script type="text/javascript">
    export default {
        data() {
            return {
                data: {}
            }
        },
        props: ["avatar_url", "username"],
        methods: {
            toUserCenter(username) {
                console.log(username)
                this.$router.push({name:"userCenter", params: {username: username}})
            }
        }
    }
</script>

<style type="text/css" ref="stylesheet/less" lang="less">
    img {
        border-radius: 50%;
    }
</style>