import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';

test('form warns when banana density estimate exceeds GIS and updates when corrected',()=>{
 const source=fs.readFileSync(new URL('../public/js/peta-app.js',import.meta.url),'utf8');
 const start=source.indexOf('function editPlant('),end=source.indexOf('\nasync function migrate()',start);
 assert.ok(start>=0&&end>start,'actual edit form must be present');
 const form={elements:Object.fromEntries(['population','replacement_plants','lost_plants'].map(name=>[name,{value:''}]))};
 const area={textContent:'',after(node){this.warning=node;}},population={textContent:''},body={innerHTML:''},error={};
 const elements={'#plantForm':form,'#plantArea':area,'#currentPopulation':population,'#modalBody':body,'#formError':error};
 const context={document:{createElement:()=>({textContent:'',setAttribute(){}})},$:key=>elements[key],num:v=>v==null?'Belum tercatat':Number(v).toLocaleString('id-ID',{maximumFractionDigits:4}),esc:v=>String(v??''),catalog:{as_of:'2026-11-04'},options:()=>''};
 const edit=vm.runInNewContext(source.slice(start,end)+'; editPlant',context);
 form.elements.population.value='586';edit({name:'E04b',commodity:'Pisang',gis_area_ha:0.2634},{population:586});
 assert.match(area.warning.textContent,/melebihi luas batas GIS/);
 assert.match(area.warning.textContent,/0,293/);
 form.elements.population.value='400';form.elements.population.oninput();
 assert.equal(area.warning.textContent,'');
 form.elements.population.value='';form.elements.population.oninput();
 assert.equal(area.warning.textContent,'');
});
