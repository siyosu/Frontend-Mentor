<template>
    <div class="p-6 md:p-8 md:pl-4">
        <div
            class="flex h-full flex-col gap-8 rounded-xl bg-cyan-600 p-6 pt-10 text-white md:justify-between md:gap-0 md:p-10 md:pt-[3.2rem]">
            <div class="flex flex-col gap-4 md:gap-10">
                <div class="mt-1 flex items-center justify-between">
                    <p class="flex flex-col">
                        Tip Amount<span class="text-[13px] font-semibold text-cyan-300">/ person</span>
                    </p>
                    <p id="tip-per-person" class="text-3xl text-cyan-400 md:text-5xl md:tracking-tight">
                        {{ formatNumber(data.tipPerPerson) }}
                    </p>
                </div>
                <div class="mt-2 flex items-center justify-between">
                    <p class="flex flex-col">
                        Total<span class="text-[13px] font-semibold text-cyan-300">/ person</span>
                    </p>
                    <p id="total-per-person" class="text-3xl text-cyan-400 md:text-5xl md:tracking-tight">
                        {{ formatNumber(data.totalPerPerson) }}
                    </p>
                </div>
            </div>
            <button @click.prevent="resetData"
                class="rounded-lg bg-cyan-400 p-[10px] text-xl font-black uppercase text-cyan-600 transition duration-200 hover:bg-cyan-200 active:scale-95 disabled:bg-cyan-400/30 disabled:cursor-not-allowed disabled:active:scale-100" :disabled="data.totalPerPerson > 0 ? false : true">
                Reset
            </button>
        </div>
    </div>
</template>

<script>
export default {
    props: ["data"],
    setup(_, { emit }) {
        const formatNumber = (num) => {
            return Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
            }).format(num);
        };

        const resetData = () => {
            emit("reset-data");
        };

        return { formatNumber, resetData };
    },
};
</script>
