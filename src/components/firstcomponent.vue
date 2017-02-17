<template>
	<div id="firstComponent">
    <c-header></c-header>
    <h1>{{title}}</h1>
    <p @click="getDate">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat.
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquam aliquid animi aperiam, blanditiis consequuntur culpa cupiditate debitis ea eni

      m exercitationem, ipsam labor
      iosam molestias mollitia nemo quibusdam, ullam voluptate voluptatem?
    </p>
    <p @click="getDate">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat.
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquam aliquid animi aperiam, blanditiis consequuntur culpa cupiditate debitis ea eni

      m exercitationem, ipsam labor
      iosam molestias mollitia nemo quibusdam, ullam voluptate voluptatem?
    </p>
    <p @click="getDate">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat.
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquam aliquid animi aperiam, blanditiis consequuntur culpa cupiditate debitis ea eni

      m exercitationem, ipsam labor
      iosam molestias mollitia nemo quibusdam, ullam voluptate voluptatem?
    </p>
    <p @click="getDate">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat.
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquam aliquid animi aperiam, blanditiis consequuntur culpa cupiditate debitis ea eni

      m exercitationem, ipsam labor
      iosam molestias mollitia nemo quibusdam, ullam voluptate voluptatem?
    </p>
    <div class="loading" v-if="loading">
      Loading...
    </div>

	</div>
</template>

<script>
	export default {
		data() {
			return {
				title: 'this is my firstComponent',
				loading: true
			}
		},
		beforeRouteEnter (to, from, next) {
			console.log(to)
			console.log(from)
			console.log(next)
			next();
		},

		methods: {
			show() {
				console.log(this.$route)
			},
      getDate() {
        this.axios.get('https://cnodejs.org/api/v1/topics').then((res)=>{
          console.log(res)
        })
      }
		}
	}
</script>

<style type="text/css" rel="stylesheet/less" lang="less" scoped>
	#firstComponent {
		padding: 4px;
		border: 1px solid #ccc;
		h1 {
		}
	}
</style>
