package Avtomatizaciya_zakupok2.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Avtomatizaciya_zakupok2.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import java.util.Date;

/**
 * Entity implementation class for Entity: ОтчетОЗакупках
 */
@Entity(name = "IISAvtomatizaciya_zakupok2ОтчетОЗакупках")
@Table(schema = "public", name = "ОтчетОЗакупках")
public class OtchetOZakupkax {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "СостояниеОплаты")
    private String состояниеоплаты;

    @Column(name = "СостОтгрузки")
    private String состотгрузки;

    @Column(name = "СуммаВклНДС")
    private Boolean суммавклндс;

    @Column(name = "СуммаДокумента")
    private Integer суммадокумента;

    @Column(name = "ДатаНачала")
    private Date датаначала;

    @Column(name = "ДатаОкончания")
    private Date датаокончания;

    @Column(name = "Номер")
    private Integer номер;

    @Column(name = "Контрагент")
    private String контрагент;

    @Column(name = "Организация")
    private String организация;

    @Column(name = "Склад")
    private String склад;


    public OtchetOZakupkax() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getСостояниеОплаты() {
      return состояниеоплаты;
    }

    public void setСостояниеОплаты(String состояниеоплаты) {
      this.состояниеоплаты = состояниеоплаты;
    }

    public String getСостОтгрузки() {
      return состотгрузки;
    }

    public void setСостОтгрузки(String состотгрузки) {
      this.состотгрузки = состотгрузки;
    }

    public Boolean getСуммаВклНДС() {
      return суммавклндс;
    }

    public void setСуммаВклНДС(Boolean суммавклндс) {
      this.суммавклндс = суммавклндс;
    }

    public Integer getСуммаДокумента() {
      return суммадокумента;
    }

    public void setСуммаДокумента(Integer суммадокумента) {
      this.суммадокумента = суммадокумента;
    }

    public Date getДатаНачала() {
      return датаначала;
    }

    public void setДатаНачала(Date датаначала) {
      this.датаначала = датаначала;
    }

    public Date getДатаОкончания() {
      return датаокончания;
    }

    public void setДатаОкончания(Date датаокончания) {
      this.датаокончания = датаокончания;
    }

    public Integer getНомер() {
      return номер;
    }

    public void setНомер(Integer номер) {
      this.номер = номер;
    }

    public String getКонтрагент() {
      return контрагент;
    }

    public void setКонтрагент(String контрагент) {
      this.контрагент = контрагент;
    }

    public String getОрганизация() {
      return организация;
    }

    public void setОрганизация(String организация) {
      this.организация = организация;
    }

    public String getСклад() {
      return склад;
    }

    public void setСклад(String склад) {
      this.склад = склад;
    }


}