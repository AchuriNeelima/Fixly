import type { Device, DeviceIssueMap } from './types';

export const devices: Device[] = [
  {
    id: 'laptop',
    name: 'Laptop',
    icon: 'Laptop',
    estimatedValue: '₹32,000',
    repairRange: '₹4,000–₹8,000',
    replacementCost: '₹45,000+',
  },
  {
    id: 'phone',
    name: 'Phone',
    icon: 'Smartphone',
    estimatedValue: '₹18,000',
    repairRange: '₹2,000–₹6,000',
    replacementCost: '₹25,000+',
  },
  {
    id: 'washing-machine',
    name: 'Washing Machine',
    icon: 'WashingMachine',
    estimatedValue: '₹22,000',
    repairRange: '₹3,000–₹7,000',
    replacementCost: '₹28,000+',
  },
  {
    id: 'air-conditioner',
    name: 'Air Conditioner',
    icon: 'AirVent',
    estimatedValue: '₹28,000',
    repairRange: '₹3,500–₹9,000',
    replacementCost: '₹35,000+',
  },
];

export const deviceIssueMap: DeviceIssueMap = {
  laptop: {
    issues: [
      { id: 'wont-turn-on', label: "Won't turn on", icon: 'Power' },
      { id: 'not-charging', label: 'Not charging', icon: 'BatteryWarning' },
      { id: 'screen-issue', label: 'Screen/display issue', icon: 'Monitor' },
      { id: 'overheating', label: 'Overheating', icon: 'Thermometer' },
      { id: 'unusual-noise', label: 'Making unusual noise', icon: 'Volume2' },
    ],
    guidance: {
      'wont-turn-on': {
        causes: [
          { title: 'Battery / power issue', description: 'The device may not be receiving enough power or the battery may need replacement.', severity: 'medium' },
          { title: 'Charging component issue', description: 'The charger, port, or related component could be involved.', severity: 'medium' },
          { title: 'Internal hardware issue', description: 'A professional inspection may be required to identify the root cause.', severity: 'high' },
        ],
        nextStep: 'Try the simplest checks first: verify the charger works with another device, check the power outlet, and look for any indicator lights.',
        repairConsiderations: ['Repair cost relative to device value', 'Device age and remaining useful life', 'Warranty status', 'Data recovery needs'],
        replaceConsiderations: ['Replacement cost for comparable device', 'New device features and improvements', 'Expected lifespan of new device', 'Setup and data migration time'],
      },
      'not-charging': {
        causes: [
          { title: 'Faulty charging cable or adapter', description: 'The cable or adapter may have degraded over time or sustained damage.', severity: 'low' },
          { title: 'Charging port issue', description: 'The port on the device may have accumulated debris or become damaged.', severity: 'medium' },
          { title: 'Battery degradation', description: 'The battery may have reached the end of its effective lifespan.', severity: 'medium' },
        ],
        nextStep: 'Try a different charger if available. Inspect the charging port for debris. Check if the battery indicator shows any response.',
        repairConsiderations: ['Cable replacement is inexpensive', 'Port repair cost varies by model', 'Battery replacement availability', 'Warranty coverage'],
        replaceConsiderations: ['Age of current device', 'Cost of replacement vs. repair', 'Performance needs', 'Available alternatives'],
      },
      'screen-issue': {
        causes: [
          { title: 'Display connection issue', description: 'The internal cable connecting the display may be loose or damaged.', severity: 'medium' },
          { title: 'Graphics hardware issue', description: 'The GPU or integrated graphics may be experiencing problems.', severity: 'high' },
          { title: 'Panel damage', description: 'The screen panel itself may need replacement.', severity: 'high' },
        ],
        nextStep: 'Try connecting to an external monitor to determine if the issue is with the display or the graphics hardware.',
        repairConsiderations: ['Screen replacement cost', 'Availability of parts', 'Device age', 'Warranty coverage'],
        replaceConsiderations: ['Cost of new device with better display', 'Current device performance', 'Trade-in value', 'Repair frequency'],
      },
      overheating: {
        causes: [
          { title: 'Dust accumulation', description: 'Internal fans and vents may be blocked with dust, reducing cooling efficiency.', severity: 'low' },
          { title: 'Thermal paste degradation', description: 'The thermal interface material between CPU and heatsink may need reapplication.', severity: 'medium' },
          { title: 'Fan malfunction', description: 'One or more cooling fans may not be working properly.', severity: 'medium' },
        ],
        nextStep: 'Check if vents are blocked. Listen for fan noise. Monitor which applications cause the most heat.',
        repairConsiderations: ['Cleaning is usually affordable', 'Thermal paste reapplication cost', 'Fan replacement availability', 'Impact on device longevity'],
        replaceConsiderations: ['Device age and overall condition', 'Performance requirements', 'Cost of repair vs. upgrade', 'Energy efficiency of newer models'],
      },
      'unusual-noise': {
        causes: [
          { title: 'Fan bearing wear', description: 'Cooling fan bearings may be worn, causing grinding or rattling sounds.', severity: 'medium' },
          { title: 'Hard drive issue', description: 'If the device has a mechanical hard drive, clicking sounds could indicate a problem.', severity: 'high' },
          { title: 'Loose internal component', description: 'A screw or component inside may have come loose.', severity: 'low' },
        ],
        nextStep: 'Try to identify where the noise is coming from. Back up important data as a precaution, especially if you hear clicking.',
        repairConsiderations: ['Fan replacement cost', 'Data backup urgency', 'Hard drive replacement cost', 'Professional diagnosis fee'],
        replaceConsiderations: ['Data recovery options', 'Device age', 'Upgrade to SSD opportunity', 'Overall device condition'],
      },
    },
  },
  phone: {
    issues: [
      { id: 'wont-turn-on', label: "Won't turn on", icon: 'Power' },
      { id: 'not-charging', label: 'Not charging', icon: 'BatteryWarning' },
      { id: 'screen-issue', label: 'Screen/display issue', icon: 'Monitor' },
      { id: 'overheating', label: 'Overheating', icon: 'Thermometer' },
      { id: 'unusual-noise', label: 'Making unusual noise', icon: 'Volume2' },
    ],
    guidance: {
      'wont-turn-on': {
        causes: [
          { title: 'Battery depletion', description: 'The battery may be completely drained or no longer holding a charge.', severity: 'medium' },
          { title: 'Software crash', description: 'The operating system may have frozen during an update or due to a software issue.', severity: 'low' },
          { title: 'Hardware failure', description: 'An internal component may have failed and a professional inspection may be needed.', severity: 'high' },
        ],
        nextStep: 'Try charging for at least 30 minutes. Attempt a force restart by holding power and volume buttons simultaneously.',
        repairConsiderations: ['Battery replacement cost', 'Repair turnaround time', 'Data recovery needs', 'Warranty status'],
        replaceConsiderations: ['Phone age and condition', 'Cost of comparable replacement', 'Contract or plan considerations', 'Trade-in value'],
      },
      'not-charging': {
        causes: [
          { title: 'Dirty charging port', description: 'Lint, dust, or debris may be preventing a proper connection.', severity: 'low' },
          { title: 'Cable or adapter issue', description: 'The charging cable or power adapter may be faulty.', severity: 'low' },
          { title: 'Battery or charging circuit issue', description: 'The battery or charging circuitry may need professional attention.', severity: 'high' },
        ],
        nextStep: 'Gently clean the charging port with a dry toothpick. Try a different cable and adapter. Test with wireless charging if supported.',
        repairConsiderations: ['Port cleaning is often free', 'Cable replacement is inexpensive', 'Battery replacement availability', 'Authorized service options'],
        replaceConsiderations: ['Phone age', 'Overall condition', 'Available upgrade options', 'Data transfer ease'],
      },
      'screen-issue': {
        causes: [
          { title: 'Screen damage', description: 'Physical damage from a drop or impact may have affected the display.', severity: 'high' },
          { title: 'Display connector issue', description: 'The internal connection between the display and motherboard may be loose.', severity: 'medium' },
          { title: 'Software rendering issue', description: 'A software glitch could be causing display artifacts.', severity: 'low' },
        ],
        nextStep: 'Try restarting the phone. If there is visible damage, get a repair estimate. Check if the issue persists in safe mode.',
        repairConsiderations: ['Screen replacement cost for your model', 'OEM vs. third-party parts', 'Repair warranty', 'Water resistance after repair'],
        replaceConsiderations: ['Cost vs. repair price ratio', 'Phone age and performance', 'Insurance claim options', 'Upgrade benefits'],
      },
      overheating: {
        causes: [
          { title: 'Background app activity', description: 'Multiple apps running simultaneously may be generating excess heat.', severity: 'low' },
          { title: 'Battery degradation', description: 'An aging battery may overheat during charging or heavy use.', severity: 'medium' },
          { title: 'Environmental factors', description: 'Direct sunlight or hot environments can exacerbate heating issues.', severity: 'low' },
        ],
        nextStep: 'Close unused apps. Remove the phone case while charging. Avoid using the phone in direct sunlight. Check battery health in settings.',
        repairConsiderations: ['Battery replacement cost', 'Software optimization', 'Professional diagnosis', 'Warranty coverage'],
        replaceConsiderations: ['Battery health percentage', 'Phone performance', 'Age of device', 'Safety considerations'],
      },
      'unusual-noise': {
        causes: [
          { title: 'Speaker issue', description: 'The speaker may be damaged or have debris causing distortion.', severity: 'medium' },
          { title: 'Vibration motor issue', description: 'The haptic feedback motor may be malfunctioning.', severity: 'low' },
          { title: 'Software audio glitch', description: 'A software issue may be causing unexpected sounds.', severity: 'low' },
        ],
        nextStep: 'Test with different audio sources. Check if the noise occurs during calls, media, or vibration. Try restarting the phone.',
        repairConsiderations: ['Speaker replacement cost', 'Vibration motor repair', 'Software troubleshooting', 'Water damage check'],
        replaceConsiderations: ['Impact on daily use', 'Phone age', 'Overall condition', 'Repair cost vs. replacement'],
      },
    },
  },
  'washing-machine': {
    issues: [
      { id: 'wont-turn-on', label: "Won't turn on", icon: 'Power' },
      { id: 'not-charging', label: 'Not draining', icon: 'BatteryWarning' },
      { id: 'screen-issue', label: 'Leaking water', icon: 'Monitor' },
      { id: 'overheating', label: 'Not spinning', icon: 'Thermometer' },
      { id: 'unusual-noise', label: 'Making unusual noise', icon: 'Volume2' },
    ],
    guidance: {
      'wont-turn-on': {
        causes: [
          { title: 'Power supply issue', description: 'The outlet, plug, or power cord may not be delivering electricity to the machine.', severity: 'low' },
          { title: 'Door latch problem', description: 'Many machines will not start if the door is not properly latched or the latch sensor is faulty.', severity: 'medium' },
          { title: 'Control board failure', description: 'The electronic control board may need professional diagnosis or replacement.', severity: 'high' },
        ],
        nextStep: 'Check if the outlet works with another device. Ensure the door is fully closed and latched. Look for error codes on the display.',
        repairConsiderations: ['Latch replacement is usually affordable', 'Control board costs vary by model', 'Technician visit fees', 'Warranty or extended plan coverage'],
        replaceConsiderations: ['Machine age and efficiency', 'Water and energy costs of older models', 'Cost of comparable replacement', 'Installation requirements'],
      },
      'not-charging': {
        causes: [
          { title: 'Clogged drain filter', description: 'Debris such as coins, lint, or small items may be blocking the drain filter.', severity: 'low' },
          { title: 'Drain hose issue', description: 'The drain hose may be kinked, clogged, or improperly positioned.', severity: 'medium' },
          { title: 'Pump failure', description: 'The drain pump may have worn out or become obstructed.', severity: 'high' },
        ],
        nextStep: 'Check and clean the drain filter if accessible. Inspect the drain hose for kinks. Listen for the pump running during drain cycles.',
        repairConsiderations: ['Filter cleaning is free', 'Hose replacement is inexpensive', 'Pump replacement cost', 'Professional service fees'],
        replaceConsiderations: ['Machine age', 'Frequency of issues', 'Water efficiency of new models', 'Available features in newer models'],
      },
      'screen-issue': {
        causes: [
          { title: 'Door seal degradation', description: 'The rubber gasket around the door may be worn, cracked, or have debris causing a poor seal.', severity: 'medium' },
          { title: 'Hose connection issue', description: 'Inlet or outlet hose connections may be loose or have worn washers.', severity: 'low' },
          { title: 'Tub or pump seal failure', description: 'Internal seals may have deteriorated and may require professional repair.', severity: 'high' },
        ],
        nextStep: 'Inspect the door seal for visible damage or debris. Check hose connections for tightness. Note where the water appears during the cycle.',
        repairConsiderations: ['Door seal replacement cost', 'Hose washer replacement is inexpensive', 'Internal seal repair complexity', 'Water damage risk if delayed'],
        replaceConsiderations: ['Age of machine', 'Severity of leak', 'Floor damage risk', 'Energy efficiency improvements'],
      },
      overheating: {
        causes: [
          { title: 'Drive belt issue', description: 'The belt connecting the motor to the drum may be worn, loose, or broken.', severity: 'medium' },
          { title: 'Motor coupling failure', description: 'The coupler between the motor and transmission may have broken.', severity: 'medium' },
          { title: 'Lid switch / door lock issue', description: 'A faulty safety switch may prevent the spin cycle from engaging.', severity: 'low' },
        ],
        nextStep: 'Check if the drum moves freely by hand. Listen for the motor sound during spin cycle. Look for error codes on the display panel.',
        repairConsiderations: ['Belt replacement is usually affordable', 'Motor coupling cost', 'Switch replacement cost', 'DIY vs professional repair'],
        replaceConsiderations: ['Machine age and condition', 'Frequency of spin issues', 'Load capacity needs', 'Modern feature availability'],
      },
      'unusual-noise': {
        causes: [
          { title: 'Foreign object in drum', description: 'A coin, button, or small item may be caught between the drum and tub.', severity: 'low' },
          { title: 'Worn drum bearings', description: 'The bearings supporting the drum may be worn, causing rumbling or grinding.', severity: 'high' },
          { title: 'Unbalanced load', description: 'An unevenly distributed load can cause banging and excessive vibration.', severity: 'low' },
        ],
        nextStep: 'Run an empty cycle to check if noise persists. Ensure the machine is level. Check for items caught in the drum seal.',
        repairConsiderations: ['Object removal may be simple', 'Bearing replacement is labor-intensive', 'Leveling adjustment is free', 'Professional diagnosis cost'],
        replaceConsiderations: ['Bearing repair cost vs. machine value', 'Machine age', 'Noise impact on daily life', 'Energy efficiency of newer models'],
      },
    },
  },
  'air-conditioner': {
    issues: [
      { id: 'wont-turn-on', label: "Won't turn on", icon: 'Power' },
      { id: 'not-charging', label: 'Not cooling', icon: 'BatteryWarning' },
      { id: 'screen-issue', label: 'Leaking water', icon: 'Monitor' },
      { id: 'overheating', label: 'Bad smell', icon: 'Thermometer' },
      { id: 'unusual-noise', label: 'Making unusual noise', icon: 'Volume2' },
    ],
    guidance: {
      'wont-turn-on': {
        causes: [
          { title: 'Power or circuit issue', description: 'The circuit breaker may have tripped or there could be a wiring issue.', severity: 'medium' },
          { title: 'Remote or thermostat issue', description: 'The remote control batteries may be dead or the thermostat may be misconfigured.', severity: 'low' },
          { title: 'Compressor or capacitor failure', description: 'A key component may have failed and professional service may be needed.', severity: 'high' },
        ],
        nextStep: 'Check the circuit breaker. Try the manual controls on the unit. Replace remote batteries. Look for any indicator lights or error codes.',
        repairConsiderations: ['Remote or thermostat fix is inexpensive', 'Capacitor replacement cost', 'Compressor repair complexity', 'Warranty coverage'],
        replaceConsiderations: ['Unit age and efficiency rating', 'Energy savings with newer models', 'Installation costs', 'Environmental regulations for refrigerants'],
      },
      'not-charging': {
        causes: [
          { title: 'Dirty air filter', description: 'A clogged filter restricts airflow and significantly reduces cooling capacity.', severity: 'low' },
          { title: 'Low refrigerant', description: 'A refrigerant leak may be reducing the system\'s ability to cool effectively.', severity: 'high' },
          { title: 'Compressor issue', description: 'The compressor may not be functioning at full capacity.', severity: 'high' },
        ],
        nextStep: 'Clean or replace the air filter. Check if the outdoor unit fan is running. Ensure vents are not blocked by furniture or curtains.',
        repairConsiderations: ['Filter replacement is affordable', 'Refrigerant recharge cost', 'Leak detection and repair', 'Compressor service fees'],
        replaceConsiderations: ['Unit age and SEER rating', 'Annual energy cost comparison', 'New technology benefits', 'Installation and ductwork needs'],
      },
      'screen-issue': {
        causes: [
          { title: 'Clogged condensate drain', description: 'The drain line may be blocked, causing water to back up and leak.', severity: 'medium' },
          { title: 'Frozen evaporator coil', description: 'Ice on the coil can melt and overflow the drain pan.', severity: 'medium' },
          { title: 'Improper installation', description: 'The unit may not be properly tilted or sealed, allowing water intrusion.', severity: 'low' },
        ],
        nextStep: 'Check the condensate drain line for blockages. Inspect the air filter (a dirty filter can cause coil freezing). Check the unit\'s tilt angle.',
        repairConsiderations: ['Drain line clearing is usually simple', 'Coil cleaning cost', 'Reinstallation costs', 'Water damage prevention'],
        replaceConsiderations: ['Frequency of leaking issues', 'Unit age', 'Installation quality concerns', 'Potential water damage costs'],
      },
      overheating: {
        causes: [
          { title: 'Mold or mildew growth', description: 'Moisture in the system can lead to microbial growth on coils or in ducts.', severity: 'medium' },
          { title: 'Dirty filter or coils', description: 'Accumulated dirt and dust can produce musty odors when the system runs.', severity: 'low' },
          { title: 'Drainage issue', description: 'Standing water in the drain pan can produce unpleasant smells.', severity: 'medium' },
        ],
        nextStep: 'Replace or clean the air filter. Run the fan-only mode to dry out moisture. Schedule a professional coil cleaning if the smell persists.',
        repairConsiderations: ['Filter replacement cost', 'Professional cleaning fees', 'Antimicrobial treatment options', 'Health considerations'],
        replaceConsiderations: ['Age of system', 'Recurring smell issues', 'Indoor air quality concerns', 'Modern filtration features'],
      },
      'unusual-noise': {
        causes: [
          { title: 'Loose or debris-blocked fan', description: 'The fan blades may be hitting debris or may have come loose from the motor shaft.', severity: 'medium' },
          { title: 'Compressor vibration', description: 'Worn mounting or internal compressor issues can create buzzing or rattling.', severity: 'high' },
          { title: 'Refrigerant flow noise', description: 'Gurgling or hissing sounds could indicate refrigerant-related issues.', severity: 'medium' },
        ],
        nextStep: 'Check for visible debris near the outdoor unit. Listen to determine if noise comes from indoor or outdoor unit. Note when the noise occurs during the cycle.',
        repairConsiderations: ['Fan blade adjustment or replacement', 'Compressor mount repair', 'Refrigerant leak inspection', 'Professional diagnosis fees'],
        replaceConsiderations: ['Compressor replacement cost vs. new unit', 'System age and efficiency', 'Noise regulations in your area', 'Available quieter models'],
      },
    },
  },
};
