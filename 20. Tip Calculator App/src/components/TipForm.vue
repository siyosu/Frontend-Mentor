<template>
    <form
        class="grid grid-cols-1 gap-1 rounded-t-[20px] bg-white md:grid-cols-2 md:gap-0 md:rounded-[25px] md:shadow-xl md:shadow-cyan-500/10">
        <div class="flex flex-col gap-8 p-8 pb-0 md:gap-10 md:p-12 md:pr-8">
            <div class="group flex flex-col gap-1" :class="{ invalid: billInvalid }">
                <label class="flex justify-between text-cyan-500">Bill<span
                        class="hidden text-red-400 group-[.invalid]:inline">Can't be zero</span></label>
                <div class="relative">
                    <img class="absolute left-5 top-1/2 -translate-y-1/2" src="../assets/images/icon-dollar.svg" alt="" />
                    <input
                        class="input-number group-[.invalid]:animate-invalid w-full group-[.invalid]:ring-2 group-[.invalid]:ring-red-400"
                        type="number" v-model="totalBill" />
                </div>
            </div>
            <div class="flex flex-col gap-4">
                <label class="text-cyan-500">Select Tip %</label>
                <div class="grid grid-cols-2 gap-4 text-center text-2xl md:grid-cols-3">
                    <label
                        class="cursor-pointer rounded-md bg-cyan-600 p-2 text-white transition duration-100 hover:bg-cyan-400 hover:text-cyan-600 [&:has(:checked)]:bg-cyan-400 [&:has(:checked)]:text-cyan-600"
                        v-for="tip of defaultTip" :key="tip" :for="'tip' + tip">
                        <input class="hidden" type="radio" :id="'tip' + tip" name="tip" :value="tip"
                            v-model="selectedTip" />
                        {{ tip }}%
                    </label>
                    <input ref="customTip" class="input-number md:tracking-tight" type="number" placeholder="Custom"
                        @input="inputCustomTip" />
                </div>
            </div>
            <div class="group flex flex-col gap-2" :class="{ invalid: numberOfPeopleInvalid }">
                <label class="flex justify-between text-cyan-500">Number of People<span
                        class="hidden text-red-400 group-[.invalid]:inline">Can't be zero</span></label>
                <div class="relative">
                    <img class="absolute left-5 top-1/2 -translate-y-1/2" src="../assets/images/icon-person.svg" alt="" />
                    <input
                        class="input-number group-[.invalid]:animate-invalid w-full group-[.invalid]:ring-2 group-[.invalid]:ring-red-400"
                        type="number" v-model="numberOfPeople" />
                </div>
            </div>
        </div>
        <TipDisplay @reset-data="resetData" :data="total" />
    </form>
</template>

<script>
import TipDisplay from "./TipDisplay.vue";
import { ref, reactive, watch, onUnmounted} from "vue";
export default {
    components: {
        TipDisplay,
    },
    setup() {
        const defaultTip = [5, 10, 15, 25, 50];
        const customTip = ref(null);

        const totalBill = ref(0);
        const selectedTip = ref(0);
        const numberOfPeople = ref(0);

        const billInvalid = ref(false);
        const numberOfPeopleInvalid = ref(false);
        const total = reactive({
            tipPerPerson: 0,
            totalPerPerson: 0,
        });

        // use custom tip value as the selected tip
        function inputCustomTip() {
            if (Number(customTip.value.value < 0)) {
                customTip.value.value = 0;
                return;
            }
            selectedTip.value = Number(customTip.value.value);
        }

        // calculate the total based on totalBill, selectedTip, and numberOfPeople
        function calculateTotal() {
            if (selectedTip.value <= 0) return;
            if (totalBill.value <= 0) {
                billInvalid.value = true;
                return;
            }
            if (numberOfPeople.value <= 0) {
                numberOfPeopleInvalid.value = true;
                return;
            }

            const tip = selectedTip.value / 100;

            total.tipPerPerson = (totalBill.value * tip) / numberOfPeople.value;
            total.totalPerPerson =
                totalBill.value / numberOfPeople.value + total.tipPerPerson;
        }

        const stop = watch(
            [selectedTip, totalBill, numberOfPeople],
            ([tip, bill, nop]) => {
                if (tip < 0) selectedTip.value = 0;

                if (bill) {
                    billInvalid.value = false
                    if (bill < 0) totalBill.value = 0;
                };

                if (nop) {
                    numberOfPeopleInvalid.value = false;
                    if (nop < 0) numberOfPeople.value = 0;
                };

                calculateTotal();
            },
        );

        function resetData() {
            totalBill.value = 0;
            selectedTip.value = 0;
            numberOfPeople.value = 0;
            customTip.value.value = "";
            total.tipPerPerson = 0;
            total.totalPerPerson = 0;
        }

        onUnmounted(() => {
            stop();
        });

        return {
            defaultTip,
            totalBill,
            selectedTip,
            customTip,
            numberOfPeople,
            billInvalid,
            numberOfPeopleInvalid,
            inputCustomTip,
            resetData,
            total,
        };
    },
};
</script>
