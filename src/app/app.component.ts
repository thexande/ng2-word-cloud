import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  private _textBlob: string
  public hasWordCloud: boolean = false   
  public completedWordMap: Map<String, Number> 
  public completedWordCloud: any = []

  public generateWordCloud(text) {
    this._textBlob = text
    this.generateHashMap()
    this.generateFinalWordCloud()
  }

  public getFontSize(count) {
    return (count * 4).toString + "px"
  }

  private _countWord(word, blob) {
    return blob.split(" ").filter(blobWord => blobWord === word).length
  }

  private generateFinalWordCloud() {
    this._textBlob.split(" ").forEach((val, key) => {
      let wordCount =  this._countWord(val, this._textBlob)      
      let wordExists = this.completedWordCloud.filter(i => i.word.includes(val))
      
      if(wordExists.length === 0) {
        this.completedWordCloud.push({
          count: wordCount,
          fsize: wordCount * 17,
          word: val + "  "
        })
      }
    })    
  }

  private generateHashMap() {
    let wordMap = new Map()
    this._textBlob.split(" ").forEach((val, key) => {
      let wordCount =  this._countWord(val, this._textBlob)      
      wordMap.set(val, wordCount)     
    })
    this.hasWordCloud = true
    this.completedWordMap = wordMap
    console.log(wordMap);
  }
}
