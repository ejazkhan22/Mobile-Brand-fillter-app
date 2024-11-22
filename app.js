// Sample data for mobile phones and models
const mobileData = {
  "Samsung": [
    {
      model: "Galaxy S21",
      specs: "6.2-inch display, 8GB RAM, 4000mAh battery"
    },
    {
      model: "Galaxy Note 20",
      specs: "6.9-inch display, 12GB RAM, 4300mAh battery"
    }
  ],
  "Apple": [
    {
      model: "iPhone 13",
      specs: "6.1-inch display, 4GB RAM, 3240mAh battery"
    },
    {
      model: "iPhone 14",
      specs: "6.1-inch display, 6GB RAM, 3279mAh battery"
    }
  ],
  "OnePlus": [
    {
      model: "OnePlus 9 Pro",
      specs: "6.7-inch display, 12GB RAM, 4500mAh battery"
    },
    {
      model: "OnePlus 10",
      specs: "6.55-inch display, 8GB RAM, 4500mAh battery"
    }
  ]
};
  // Populate the first drop-down (mobile brands)
  const mobileNameSelect = document.getElementById("mobileName");
  Object.keys(mobileData).forEach(brand => {
    const option = document.createElement("option");
  option.value = brand;
    option.textContent = brand;
    mobileNameSelect.appendChild(option);
  });
  
  // Event listener for brand selection
  mobileNameSelect.addEventListener("change", (e) => {
    const selectedBrand = e.target.value;
    const mobileModelSelect = document.getElementById("mobileModel");
    const specDetails = document.getElementById("specDetails");
    const specification = document.getElementById("specification");
  
    // Clear previous options and hide specs
    mobileModelSelect.innerHTML = "<option value=''>--Select Model--</option>";
    specification.style.display = "none";
  
    if (selectedBrand) {
      const models = mobileData[selectedBrand];
  
      // Enable the model dropdown
      mobileModelSelect.disabled = false;
  
      // Populate the model dropdown based on selected brand
      models.forEach(model => {
        const option = document.createElement("option");
        option.value = model.model
        option.textContent = model.model;
        mobileModelSelect.appendChild(option);
      });
      
    } else {
      mobileModelSelect.disabled = true;
    }
  });
  
  // Event listener for model selection
  document.getElementById("mobileModel").addEventListener("change", (e) => {
    const selectedModel = e.target.value;
    const selectedBrand = mobileNameSelect.value;
  
    if (selectedBrand && selectedModel) {
      const modelData = mobileData[selectedBrand].find(model => model.model === selectedModel);
  
      // Show the specifications of the selected model
      if (modelData) {
        document.getElementById("specDetails").textContent = modelData.specs;
        document.getElementById("specification").style.display = "block";
      }
    }
  });