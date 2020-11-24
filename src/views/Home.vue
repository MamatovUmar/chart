<template>
	<div class="home">
		<div class="container">
			<el-button type="primary" @click="dialogVisible = true"
				>Создать график</el-button
			>

			<div class="charts">
				<div v-for="(chart, k) of chart_list" :key="k">
					<pie v-if="chart.type == 'Pie chart'" :chart="chart" />

					<chart-line v-else :chart="chart" />
				</div>
			</div>
		</div>

		<el-dialog
			title="Создать график"
			:visible.sync="dialogVisible"
			width="500px"
			v-loading="loading"
		>
			<el-form :model="form" ref="chartForm" label-position="top">
				<el-form-item
					label="Выберите тип график"
					prop="chart_type"
					:rules="required"
				>
					<el-select v-model="form.chart_type" @change="setSource()">
						<el-option
							v-for="(type, i) of chart_types"
							:key="`type-${i}`"
							:label="type"
							:value="type"
						></el-option>
					</el-select>
				</el-form-item>

				<el-form-item
					label="Выберите источник данных"
					prop="data"
					:rules="required"
				>
					<el-select v-model="form.data">
						<el-option
							v-for="(item, i) of source"
							:key="`source-${i}`"
							:label="item.label"
							:value="item.value"
						></el-option>
					</el-select>
				</el-form-item>
			</el-form>

			<span slot="footer" class="dialog-footer">
				<el-button type="primary" @click="createChart()"
					>Создать</el-button
				>
			</span>
		</el-dialog>
	</div>
</template>

<script>
import Pie from "@/components/Pie.vue";
import ChartLine from "@/components/ChartLine.vue";

export default {
	components: {
		Pie,
		ChartLine,
	},
	data() {
		return {
			loading: false,
			dialogVisible: false,
			required: {
				required: true,
				message: " ",
				trigger: "change",
			},
			form: {
				chart_type: "",
				data: "",
			},
			chart_types: ["Pie chart", "Line chart"],
			source: [],
			chart_list: [],
		};
	},

	methods: {
		createChart() {
			this.$refs["chartForm"].validate(async (valid) => {
				if (valid) {
					this.loading = true;
					let res = await this.$store.dispatch(
						"getData",
						this.form.data
					);

					this.loading = false;

					this.chart_list.unshift({
						title: `${this.chart_list.length + 1}. ${
							this.form.chart_type
						}`,
						type: this.form.chart_type,
						data_source: res,
					});

					this.dialogVisible = false;
				} else {
					return false;
				}
			});
		},

		setSource() {
			this.form.data = "";
			if (this.form.chart_type == "Pie chart") {
				this.source = [
					{
						label: "Данные для Pie chart",
						value:
							"https://run.mocky.io/v3/2699115b-8ced-40c3-8072-b7fa9faf6047",
					},
				];
			} else if (this.form.chart_type == "Line chart") {
				this.source = [
					{
						label: "Данные для Line chart",
						value:
							"https://run.mocky.io/v3/92a0a266-0321-4ff5-9993-b394d03ceee2",
					},
				];
			}
		},
	},
};
</script>
<style lang="scss">
.home {
	padding-top: 50px;
}
.charts {
	margin-top: 30px;
}
.el-form-item__label {
	line-height: 14px !important;
}
.el-select {
	width: 100%;
}
</style>
