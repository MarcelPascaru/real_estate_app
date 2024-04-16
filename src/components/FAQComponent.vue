<template>
  <h1 class="text-center font-bold text-3xl mt-[7rem]">Frequently Asked Questions (FAQ)</h1>
  <div class="demo-collapse w-full flex justify-center items-center">
    <el-collapse v-model="activeNames" @change="handleChange" class="w-lg mt-[7rem] shadow-2xl p-5 rounded-[1rem]">
      <el-collapse-item title="How do I search for properties on the platform?" name="1">
        <pre class="font-body">
          To search for properties, simply navigate to the "Search" section of the website or app.
          Enter your desired location, property type, price range, and any other relevant criteria.
          Click on the "Search" button to view a list of properties that match your search criteria.
          You can further refine your search results using filters such as property size, number of bedrooms, amenities, etc.
        </pre>
      </el-collapse-item>
      <el-collapse-item title="How do I list my property for sale or rent on the platform?" name="2">
        <pre class="font-body">
          To list your property, create an account or log in if you already have one.
          Once logged in, navigate to the "List Property" or "Sell/Rent" section of the website or app.
          Fill out the required information about your property, including its location, size, features, photos, and asking price.
          Review the information and submit your listing for review. Our team will verify the details and publish your listing on the platform.
        </pre>
      </el-collapse-item>
      <el-collapse-item title="How can I contact the seller or landlord of a property?" name="3">
        <pre class="font-body">
          Each property listing includes contact information for the seller or landlord.
          Simply click on the "Contact" button or fill out the contact form provided on the listing page.
          You can send a message directly to the seller or landlord to inquire about the property, schedule a viewing, or negotiate terms.
        </pre>
      </el-collapse-item>
      <el-collapse-item title="What payment methods are accepted for transactions on the platform?" name="4">
        <pre class="font-body">
          We take the security and privacy of your personal information seriously.
          Our platform employs industry-standard security measures to protect your data from unauthorized access, misuse, or disclosure.
          We do not share your personal information with third parties without your consent, except as required by law or to facilitate transactions on the platform.
        </pre>
      </el-collapse-item>
      <el-collapse-item title="How secure is my personal information on the platform?" name="5">
        <pre class="font-body">
          We accept various payment methods for transactions, including credit/debit cards, bank transfers, and third-party payment processors such as PayPal or Stripe.
          The available payment methods may vary depending on your location and the type of transaction.
        </pre>
      </el-collapse-item>
      <el-collapse-item title="How can I report a problem or provide feedback about the platform?" name="6">
        <pre class="font-body">
          If you encounter any issues while using the platform or have suggestions for improvement, please contact our support team.
          You can reach out to us via live chat, email, or phone, as listed on the "Contact Us" page.
          We appreciate your feedback and will strive to address any concerns promptly.
        </pre>
      </el-collapse-item>
      <el-collapse-item title="Are there any fees or charges associated with using the platform?" name="7">
        <pre class="font-body">
          There may be fees or charges associated with certain services or transactions on the platform, such as listing fees for sellers or transaction fees for buyers.
          The specific fees and charges applicable to your use of the platform will be clearly outlined before you proceed with any transactions.
          Please review the terms of service and pricing information provided on the platform for more details.
        </pre>
      </el-collapse-item>
      <el-collapse-item title="How can I reset my password if I forget it?" name="8">
        <pre class="font-body">
          If you forget your password, you can reset it by clicking on the "Forgot Password" link on the login page.
          Enter your email address associated with your account and follow the instructions sent to your email to reset your password.
          If you encounter any issues with resetting your password, please contact our support team for assistance.
        </pre>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const activeNames = ref(['1'])
const handleChange = (val: string[]) => {
  console.log(val)
}
</script>
