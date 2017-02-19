<template>
    <img :src="avatar_url" :data-id="u_id"  @click='toUserInfo(u_id)' />
</template>

<script type="text/javascript">
    export default {
        data() {
            return {
                data: {}
            }
        },
        props: ['avatar_url', 'u_id'],
        methods: {
            toUserInfo(uId) {
                console.log(uId);
            }
        }
    }
</script>

<style scoped type="text/css" rel="stylesheet/less" lang="less">
    img {
        border-radius: 50%;
    }
</style>