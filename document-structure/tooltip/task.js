document.addEventListener("DOMContentLoaded", () => {
    const tooltips = document.querySelectorAll(".has-tooltip");
  
    tooltips.forEach((tooltip) => {
      tooltip.addEventListener("click", (event) => {
        event.preventDefault();

        document.querySelectorAll(".tooltip").forEach((tooltipElement) => {
            tooltipElement.classList.remove("tooltip_active");
          });

          let tooltipElement = tooltip.nextElementSibling;
          if (tooltipElement?.classList.contains("tooltip_active")) {
            tooltipElement.classList.remove("tooltip_active");
            return;
          }

          if (!tooltipElement || !tooltipElement.classList.contains("tooltip")) {
            tooltipElement = document.createElement("div");
            tooltipElement.className = "tooltip";
            tooltipElement.textContent = tooltip.getAttribute("title");
            tooltip.insertAdjacentElement("afterend", tooltipElement);
          }

          const rect = tooltip.getBoundingClientRect();
          tooltipElement.style.left = `${rect.left}px`;
          tooltipElement.style.top = `${rect.bottom}px`;
          tooltipElement.classList.add("tooltip_active");
        });
      });

      document.addEventListener("click", (event) => {
        if (!event.target.classList.contains("has-tooltip")) {
          document.querySelectorAll(".tooltip_active").forEach((activeTooltip) => {
            activeTooltip.classList.remove("tooltip_active");
          });
        }
      });
    });