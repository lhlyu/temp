<template>
	<div>
		这里引用图标会报错
		<More></More>
	</div>
</template>

<script lang="ts">
import { More } from '@icon-park/vue-next'

export default {
	components: {
		More
	},
	setup() {
		return {}
	}
}
</script>