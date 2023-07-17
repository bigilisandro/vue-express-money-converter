<template>
  <div>
    <div class="grid md:grid-cols-2 gap-8 m-8">
      <div>
        <label
          for="from"
          class="block text-xl font-medium leading-6 text-gray-900 text-left"
          >FROM:</label
        >
        <div class="grid grid-cols-2 gap-4 my-5">
          <select
            v-model="from"
            @change="convertCurrency"
            class="
              block
              rounded-md
              border-0
              text-gray-900
              shadow-sm
              ring-1 ring-inset ring-gray-300
            "
          >
            <option
              v-for="currency in currencies"
              :key="currency"
              :value="currency"
            >
              {{ currency }}
            </option>
          </select>
          <input
            type="number"
            v-model="amount"
            @input="convertCurrency"
            class="
              block
              rounded-md
              border-0
              p-2
              text-gray-900
              shadow-sm
              ring-1 ring-inset ring-gray-300
            "
          />
        </div>
      </div>

      <div>
        <label
          for="from"
          class="block text-xl font-medium leading-6 text-gray-900 text-left"
          >TO:</label
        >
        <div class="grid grid-cols-2 gap-4 my-5">
          <select
            v-model="to"
            @change="convertCurrency"
            class="
              block
              rounded-md
              border-0
              text-gray-900
              shadow-sm
              ring-1 ring-inset ring-gray-300
            "
          >
            <option
              v-for="currency in currencies"
              :key="currency"
              :value="currency"
            >
              {{ currency }}
            </option>
          </select>
          <input
            v-model="convertedAmount"
            disabled
            class="
              block
              rounded-md
              border-0
              p-2
              text-gray-900
              shadow-sm
              ring-1 ring-inset ring-gray-300
            "
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      amount: 1,
      from: "USD",
      to: "ARS",
      currencies: ["USD", "EUR", "GBP", "CAD", "AUD", "ARS", "BTC"], // Add more currencies as needed, check Open Exchange Rates API https://docs.openexchangerates.org/reference/api-introduction
      convertedAmount: null,
      apiKey: process.env.VUE_APP_API_KEY, // Create a .env file in the root folder and replace with your Open Exchange Rates API key
    };
  },
  methods: {
    convertCurrency() {
      const apiUrl = `https://openexchangerates.org/api/latest.json?app_id=${this.apiKey}`;

      axios
        .get(apiUrl)
        .then((response) => {
          const rates = response.data.rates;
          const rateFrom = rates[this.from];
          const rateTo = rates[this.to];

          this.convertedAmount = ((this.amount / rateFrom) * rateTo).toFixed(2);
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
  mounted() {
    this.convertCurrency();
  },
};
</script>
