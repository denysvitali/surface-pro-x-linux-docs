# Booting Attempts

<!-- toc -->

## 2021-12-13

### ACPI - 1

#### Based on

#### Status

- Can boot
- Can connect via SSH
- Doesn't hang-up
- Cannot see NVME drive

#### Boot Log

<div class="accordion-button">Boot Log</div>
<div class="accordion-content">

```
{{#include booting_attempts/2021-12-13/1-acpi.txt}}
```

</div>

## 2021-12-14

### ACPI - 2

#### Based on

- [f0b2341](https://github.com/denysvitali/surface-pro-x-linux/commit/f0b2341b12641690fbd59d5e61b08112a42c03f2)

#### Status

- Can boot
- Can connect via SSH
- Doesn't hang-up
- Cannot see NVME drive

<div class="accordion-button">Boot Log</div>
<div class="accordion-content">

```
{{#include booting_attempts/2021-12-14/2-acpi.txt}}
```

</div>

### DT - 3

#### Based on

- [de516f4e](https://github.com/denysvitali/surface-pro-x-linux/commit/de516f4ed89348c1725422339af8f08cc89dd2d7)

#### Status

- Hangs
- Cannot connect via SSH

<div class="accordion-button">Boot Log</div>
<div class="accordion-content">

```
{{#include booting_attempts/2021-12-14/3-dt.txt}}
```

</div>

