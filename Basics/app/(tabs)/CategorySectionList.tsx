import { SectionList, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const catList = [
  { category: "Mobiles", data: ["iPhone", "Samsung Galaxy", "OnePlus", "Google Pixel"] },
  { category: "Laptops", data: ["MacBook Pro", "Dell XPS", "HP Spectre", "Lenovo ThinkPad"] },
  { category: "Tablets", data: ["iPad Pro", "Samsung Galaxy Tab", "Microsoft Surface Pro", "Amazon Fire HD"] },
  { category: "Accessories", data: ["AirPods", "Samsung Galaxy Buds", "Anker Power Bank", "Logitech Mouse"] },
  { category: "Smartwatches", data: ["Apple Watch", "Samsung Galaxy Watch", "Fitbit Versa", "Garmin Fenix"] },
  { category: "Headphones", data: ["Sony WH-1000XM4", "Bose QuietComfort 35", "Sennheiser HD 450BT", "Jabra Elite 85h"] },
  { category: "Speakers", data: ["Sonos One", "Bose SoundLink Revolve", "JBL Flip 5", "Ultimate Ears Boom 3"] },
  { category: "Cameras", data: ["Canon EOS R5", "Nikon Z6 II", "Sony A7 III", "Fujifilm X-T4"] },
  { category: "Printers", data: ["HP LaserJet Pro", "Canon PIXMA", "Epson EcoTank", "Brother MFC-L3770CDW"] },
  { category: "Monitors", data: ["Dell UltraSharp", "LG UltraFine", "ASUS ProArt", "Samsung Odyssey"] },
];

const CategorySectionList = () => {
  return (
    <View>
      <SectionList
        sections={catList}
        keyExtractor={(item, index) => item + index}
        renderItem={(iter ) => <Text style={{ fontSize: 18, marginVertical: 5 }}>{iter.item}</Text>}
        renderSectionHeader={(iter)=><Text style={{ fontSize: 24, fontWeight: 'bold', marginVertical: 10 }}>{iter.section.category}</Text>
        }/>
    </View>
  )
}

export default CategorySectionList

const styles = StyleSheet.create({})